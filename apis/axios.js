import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.81:3000',
  headers: {
    'content-type': 'application/json',
  },
});

export const updateToken = jwt => {
  axiosInstance.interceptors.request.use(config => {
    config.headers.authorization = 'Bearer ' + jwt;
    return config;
  });
};

export default axiosInstance;
