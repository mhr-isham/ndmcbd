import axios from "axios";
import { url } from "../services/url";

const caVerify = (token) => {
  const response = axios.post(`${url}/event/ca/verify`, { token: token });
  return response;
};

export default caVerify;
