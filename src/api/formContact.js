import axios from "axios";
import { url } from "../services/url";

const formContact = (data) => {
  const responseData = axios.post(`${url}/form/support`, { ...data });

  return responseData;
};

export default formContact;
