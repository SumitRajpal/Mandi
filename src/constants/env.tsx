const Environment = {
  dev: {
    url: "http://192.168.9.101:3000/",
    api_version: "v1"
  },
  prod: {
    url: "http://192.168.9.100:3000/",
    api_version: "v1"
  }
};

const ApiConfig = Environment.dev;

export default ApiConfig;
