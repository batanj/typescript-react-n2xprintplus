import jwtDecode from "jwt-decode";
import http from "./httpService";
import config from "../config.json";
import User from "../types/User";

const getUser = () => {
  const token = getToken();

  if (!token) {
    return {};
  }

  try {
    const user: User = jwtDecode(token);
    return user;
  } catch (ex) {
    // console.log(ex);
    return {};
  }
};

const getToken = () => {
  return localStorage.getItem("token");
};

const logoutUser = async (user: User | null) => {
  if (user === null) return;

  try {
    await http.post(config.apiEndpoint + "auth/logout", user);
  } catch (error) {
    alert(
      "You either forgot to log out yesterday\nor there is a problem connecting to the database server...\nContact your system administrator.\nLogging out..."
    );
  }

  localStorage.removeItem("token");
  return (window.location.href = "/");
};

const getUserData = async () => {
  return await http.get(config.apiEndpoint + "users/me", {
    headers: { "x-auth-token": getToken() },
  });
};

const auth = { getUser, logoutUser, getToken, getUserData };

export default auth;
