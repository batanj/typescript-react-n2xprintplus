import Joi from "joi";
import http from "./httpService";
import config from "../config.json";

interface login {
  email: string;
  password: string;
}

interface customer {
  companyName: string;
  email: string;
  address: string;
  contactNumber: string;
  tin: string;
}

const validateInput = (account: login) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("E-mail"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(account);
};

const validateLogin = async (account: login) => {
  return await http.post(config.apiEndpoint + "auth", account);
};

const validateCustomer = (customer: customer) => {
  const schema = Joi.object({
    companyName: Joi.string().min(3).max(255).required().label("Company Name"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .min(5)
      .max(255)
      .required()
      .label("E-mail"),
    address: Joi.string().min(5).max(255).required().label("Address"),
    contactNumber: Joi.string()
      .min(5)
      .max(50)
      .required()
      .label("Contact Number"),
    tin: Joi.string().min(10).max(20).label("TIN Number"),
  });

  return schema.validate(customer);
};

const validate = {
  input: validateInput,
  login: validateLogin,
  customer: validateCustomer,
};

export default validate;
