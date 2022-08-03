import axios from 'axios';

const API_URL = 'http://localhost:3002/api';

const $api = axios.create({
  withCreditentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export default $api;
