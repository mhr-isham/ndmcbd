import axios from "axios";
import { url } from "../services/url";

const caLogin = (userToken) => {
  const response = axios.post(
    `${url}/event/ca/login_${new Date()
      .toLocaleString("en-US", {
        timeZone: "Asia/Dhaka",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        hour12: false,
      })
      .replace(/[-\/: ,]/g, "")}`,
    { token: userToken }
  );
  return response;
};

export default caLogin;
