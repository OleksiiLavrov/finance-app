import axios from "axios";

export const API_URL = process.env.REACT_APP_API_URL;

const token = process.env.REACT_APP_API_TOKEN;

const $api = axios.create({
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers["X-Token"] = token;
  return config;
});

export default $api;
