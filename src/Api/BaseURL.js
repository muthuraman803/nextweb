import axios from "axios";

// Create a separate instance for API calls
const BaseURL = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// Retrieve token and xkey from local storage
const token = localStorage.getItem("token");

// Set 'X-API-KEY' header
BaseURL.defaults.headers.common["X-API-KEY"] =
  "uxSy80YDU+P5FAss4SLmGHVNtU1vU7tDfzXAEB2Wmfk=";

// Function to set the 'Authorization' header
export const setAuthorizationHeader = (token) => {
  // BaseURL.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  localStorage.setItem("token", token);
};

if (token) {
  setAuthorizationHeader(token);
}

// Set default headers for POST requests
// BaseURL.defaults.headers.post["Content-Type"] = "application/json";

export default BaseURL;
