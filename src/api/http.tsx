import { logoutNavigation } from "src/components/RootNavigation";
import { ApiConfig, STORAGE_KEYS, WEB_SERVICES } from "src/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const getHeaders = async () => {
  const storage: any = await AsyncStorage.getItem(STORAGE_KEYS.login_user_details);
  const result = JSON.parse(storage);

  return {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    Authorization: result ? `Bearer ${result.accessToken}` : "",
  };
};
// RESPONSE HANDLE
const getResponse = (response: any) => {
  const result = {
    status: true,
    data: response.data ?? {},
    params: response?.config ? response?.config?.params : "",
    error: null
  };
  return result;
};

const getError = (error: any) => {
  const errorResponse = {
    status: false,
    data: error || {
      message: "Something went wrong",
      status: "UNAUTHORIZED",
      errorCode: "ERR149",
      debugMessage: "Something went wrong"
    },
    error: error?.message || "Something went wrong"
  };
  return errorResponse;
};



const onSuccess = (response: any) => getResponse(response);
const onError = (err: any) => getError(err);


const errorResponses = [400, 401, 403, 404, 500, 415];
type handleRequest = {
  requestConfig: any,
  checkAuth: boolean
}
const handleRequest: any = async ({ requestConfig, checkAuth }: handleRequest) =>
  axios(requestConfig)
    .then((response:any) => response)
    .catch((error: any) => {
      if (error?.response?.status === 401) {
        logoutNavigation();
      }
      if (errorResponses.includes(error?.response?.status)) {
        throw error.response?.data;
      }
      throw new Error("Something went wrong");
    });

export const api = async (
  { url = "",
    method = "GET",
    body = null,
    params = {},
    checkAuth = false, }
) => {
  let requestConfig: any = {};
  const headers = await getHeaders();
  requestConfig = { url, headers, method };
  if (body) {
    requestConfig = {
      ...requestConfig,
      data: JSON.stringify(body)
    };
  }
  if (params) {
    requestConfig.params = params;
  }
  const response = await handleRequest({ requestConfig, checkAuth });
  return response?.data || {};
};

export const getHttp = async (url: any, body: any) => {
  try {
    const response = await api({
      url,
      params:body,
    });
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};

export const postHttp = async (url: any, body: any) => {
  try {
    const response = await api({
      url,
      method: "POST",
      body,
    });
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};

export const putHttp = async (url: any, body: any) => {
  try {
    const response = await api({
      method: "PUT",
      url,
      body
    });
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};

