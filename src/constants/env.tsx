const Environment = {
  dev: {
    url: "http://192.168.196.161:3000/",
    api_version: "v1"
  },
  prod: {
    url: "http://192.168.110.161:3000/",
    api_version: "v1"
  }
};

const ApiConfig = Environment.dev;

export default ApiConfig;
