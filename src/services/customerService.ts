import http from "./httpService";
import authService from "./authService";
import config from "../config.json";
import Customer from "../types/Customer";

const headers = { headers: { "x-auth-token": authService.getToken() } };

const getCustomer = (id: string) => {
  const customer = localStorage.getItem(id);
  return JSON.parse(customer!);
};

const saveCustomer = (customer: Customer) => {
  localStorage.setItem(customer._id!, JSON.stringify(customer));
};

const sendCustomerData = async (customer: Customer) => {
  return await http.post(config.apiEndpoint + "customers", customer, headers);
};

const getCustomers = async (keyword: string) => {
  return await http.get(
    config.apiEndpoint + `customers/company/${keyword}`,
    headers
  );
};

const customer = {
  get: getCustomer,
  save: saveCustomer,
  sendData: sendCustomerData,
  getAll: getCustomers,
};

export default customer;
