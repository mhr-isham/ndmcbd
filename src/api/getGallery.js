import axios from "axios";
import { url } from "../services/url";

const getGallery = () => {
  const response = axios.post(`${url}/gallery`);
  return response;
};

export default getGallery;
