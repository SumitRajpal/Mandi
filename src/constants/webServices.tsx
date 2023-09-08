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
  cart: {
    getCart: `${ApiConfig.url}cart`,
  },
  cartDetails: {
    postCart: `${ApiConfig.url}cart-details`
  },
  payment: {
    payment: `${ApiConfig.url}payment`
  },
  invoice: {
    getInvoice: `${ApiConfig.url}invoice`,
  },
  utility: {
    appVersion: `${ApiConfig.url}utils/version`,
  }
};



export { WEB_SERVICES };
