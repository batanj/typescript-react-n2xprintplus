import http from "./httpService";
import authService from "./authService";
import config from "../config.json";

const headers = { headers: { "x-auth-token": authService.getToken() } };

const getPrices = async (serviceName: string) => {
    return await http.get(
        config.apiEndpoint + `prices`,
        headers
      );
}

const prices = {
    get: getPrices
}

export default prices;