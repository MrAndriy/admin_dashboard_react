import axios from 'axios';

const $host = axios.create({
  baseURL: 'http://localhost:3002/api',
});

const $authHost = axios.create({
  baseURL: 'http://localhost:3002/api',
});

const userData = JSON.parse(localStorage.getItem('userData'));

const authInterceptor = (config) => {
  if (userData) {
    config.headers.Authorization = `Bearer ${userData.token}`;
  }
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
