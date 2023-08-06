import ApiConfig from "src/constants/env";

const WEB_SERVICES = {
  method: {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE"
  },
  auth: {
    getPermissions:`${ApiConfig.url}auth/permissions`,
    login: `${ApiConfig.url}auth/login`,
    refresh: `${ApiConfig.url}auth/refresh`,
  },
  user:{
 getUser:`${ApiConfig.url}users`,
  },
  utility: {
    appVersion: `${ApiConfig.url}utils/version`,
  }
};



export { WEB_SERVICES };
