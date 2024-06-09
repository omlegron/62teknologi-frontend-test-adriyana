// import http from "../libs/axios-auth";
import axios from "axios";
const API = process.env.REACT_APP_API_URL
const headers = {
    "Access-Control-Allow-Origin" : "*",
    'Authorization': `${process.env.REACT_APP_AUTH_BEARER}`,
    'Content-Type': 'application/json'
};
  
export const getList = async () => {
    try {
        const res = await axios.get(`${API}v3/businesses/search?location=New%20York%20City`, { headers });
        return res.data;
    } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Error response:", error.response.data);
          console.error("Error status:", error.response.status);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("Error request:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error message:", error.message);
        }
        throw error;
    }
};