import axios from "axios";
import { url } from "../services/url";

const SubscribeNewsLetter = (inputemail) => {
  const response = axios.post(`${url}/subscribe`, { email: inputemail });
  return response;
};

export default SubscribeNewsLetter;
