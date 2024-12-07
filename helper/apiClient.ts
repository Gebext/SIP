import axios from "axios";

const strapiClient = axios.create({
  baseURL: process.env.API_ADDRESS, // Replace with your API's base URL
  timeout: 10000, 
});

strapiClient.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${process.env.JWT_ADMIN}`;
    return config;
  },
  (error) => {
    return Promise.reject(error); // Forward any request errors
  }
);

// Optional: Add a response interceptor for handling responses or errors globally
strapiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle token expiration or unauthorized access globally
      console.error("Unauthorized - Redirect to login");
    }
    return Promise.reject(error);
  }
);

export default strapiClient;
