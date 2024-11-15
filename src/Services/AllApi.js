import { commonAPI } from "./CommonAPI"
import { SERVER_URL } from "./ServerUrl";

// register Api
export const registerAPI = async (user) => {
    return await commonAPI("POST", `${SERVER_URL}/register`, user, "");
  };
  // login API
  export const loginAPI = async (user) => {
    return await commonAPI("POST", `${SERVER_URL}/login`, user, "");
  };