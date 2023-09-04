import ApiConfig from "src/constants/env";

const WEB_SERVICES = {
  method: {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE"
  },
  auth: {
    getPermissions: `${ApiConfig.url}auth/permissions`,
    signin: `${ApiConfig.url}signin`,
    refresh: `${ApiConfig.url}auth/refresh`,
  },
  user: {
    signin: `${ApiConfig.url}users/signin`,
    getUser: `${ApiConfig.url}users`,
  },
  products: {
    getProducts: `${ApiConfig.url}products`,
  },
  category: {
    getCategory: `${ApiConfig.url}category`
  },
    utility: {
      appVersion: `${ApiConfig.url}utils/version`,
  }
};



export { WEB_SERVICES };
