import axios from "axios";
const url = "https://beta.ndmcbd.org/api/";

export const getMember = async (roll) => {
  const getUser = await axios.post(`${url}/_auth/member`, { roll: roll });
  return getUser.data;
};
