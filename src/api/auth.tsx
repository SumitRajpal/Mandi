import { getHttp, postHttp, putHttp } from "src/api/http";
import { WEB_SERVICES } from "src/constants";
import moment from "moment";
import { Platform } from "react-native";

async function login(username:String, password:String) {
  const params = {
    password,
    username
  };
  const result = await postHttp(WEB_SERVICES.auth.login, params);
  return result;
}

async function getUserPermission() {
  const URL = WEB_SERVICES.auth.getPermissions;
  const permissions = await getHttp(URL, {});
  return permissions;
}

// async function otpValidate(otp, sessionId) {
//   const URL = `${WEB_SERVICES.otp.otpValidate}/${otp}/${sessionId}`;
//   return await getHttp(URL, {});
// }

// async function generateOTP(number) {
//   const URL = `${WEB_SERVICES.otp.generateOTP}/${number}`;
//   return await getHttp(URL, {});
// }

// async function getUserProfile() {
//   const URL = WEB_SERVICES.user.getUserProfile;
//   const profile = await getHttp(URL, {});
//   return profile;
// }

// async function updateUserProfile(params) {
//   const URL = WEB_SERVICES.user.updateUserProfile;
//   const result = await putHttp(URL, params);
//   return result;
// }



export {
  login,
  getUserPermission
};
