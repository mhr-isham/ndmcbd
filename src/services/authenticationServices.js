import axios from "axios";
import { url } from "./url";

export const checkLogin = async ({ roll, password }) => {
  const checkedData = await axios.post(`${url}/_auth/login`, {
    roll,
    password,
  });
  return checkedData;
};
