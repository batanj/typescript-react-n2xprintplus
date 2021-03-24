import axios from "axios";
// import * as Sentry from "@sentry/react";

axios.interceptors.response.use(undefined, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    // Sentry.captureException(error);
    return Promise.reject("An unexpected error occured.");
  }
  return Promise.reject(error.response);
});

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
