import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers:{
        'Content-Type': 'application/json',
    },
});
// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  }, 
  function handleErrorResponse(error) {
    const { config, status, data } = error.response;
    // const URLS = ['/signup', '/login'];
    // if (URLS.includes(config.url) && status === 422) {
    //   const errorsList = data || [];
    //   const firstError = Object.keys(errorsList).length > 0 ? Object.values(errorsList)[1] : {};
    //   const messageArray = Object.keys(firstError).length > 0 ? Object.values(firstError)[0] : {};
    //   const message = messageArray.join(' ');
    //   throw new Error(message);
    // }else if (URLS.includes(config.url) && status === 500) {
    //   const errorsList = data || [];
    //   const message = typeof errorsList === 'object' ? Object.values(errorsList)[0] : errorsList;
    //   throw new Error(message);
    // }
    return Promise.reject(error);
});

  

export default axiosClient;
