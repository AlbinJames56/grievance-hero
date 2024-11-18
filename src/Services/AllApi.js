import { commonAPI } from "./CommonAPI"
import { SERVER_URL } from "./ServerUrl";

// register Api
export const registerAPI = async (user) => {
    return await commonAPI("POST", `${SERVER_URL}UserRouter/register`, user);
  };
  // login API
  export const loginAPI = async (user) => {
    return await commonAPI("POST", `${SERVER_URL}UserRouter/login`, user);
  };

  // addGrievance
  export const addGrievanceAPI = async (reqBody) => {
    
    const token = sessionStorage.getItem("token");
    return await commonAPI("POST", `${SERVER_URL}UserRouter/addGrievance?token=${token}`, reqBody); };

  // fetch userGrievances
  export const getUserGrievancesAPI = async () => {
    const token = sessionStorage.getItem("token");
    return await commonAPI("GET", `${SERVER_URL}UserRouter/getUserGrievance?token=${token}`, "");
  };