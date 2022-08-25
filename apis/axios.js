import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.81:3000',
});

export const updateToken = jwt => {
  axiosInstance.interceptors.request.use(config => {
    config.headers.authorization = 'Bearer ' + jwt;
    return config;
  });
};

export const getPost = () => {
  axiosInstance.get('/allpost').then(res => {
    console.log(res.data);
  });
};

export const uploadFile = file => {
  const data = new FormData();
  data.append('file', {
    name: file.fileName,
    type: file.type,
    uri: file.uri,
  });
  return axiosInstance
    .post('/upload', data, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    })
    .then(res => {
      return res.data;
    });
};

export default axiosInstance;
