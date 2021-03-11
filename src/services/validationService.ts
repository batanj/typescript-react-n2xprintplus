import Joi from "joi";
import http from "./httpService";
import config from "../config.json";

interface login {
  email: string;
  password: string;
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

const validate = {
  input: validateInput,
  login: validateLogin,
};

export default validate;
