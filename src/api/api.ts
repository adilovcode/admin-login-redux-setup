import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
    baseURL: 'http://localhost/api'
})

// Locale and token
api.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers.locale = localStorage.getItem('locale') || 'ru';
  const token = localStorage.getItem('jwt-token');
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  return config;
});

export default api;
