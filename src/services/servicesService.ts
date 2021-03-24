import http from "./httpService";
import authService from "./authService";
import config from "../config.json";

const headers = { headers: { "x-auth-token": authService.getToken() } };

const getServices = async () => {
  return await http.get(config.apiEndpoint + "services", headers);
};

const getPrices = async () => {
  return await http.get(config.apiEndpoint + "prices", headers);
};

const services = { getServices, getPrices };

export default services;
