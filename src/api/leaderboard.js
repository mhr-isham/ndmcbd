import axios from "axios";
import { url } from "../services/url";

const getLeaderboard = () => {
  const response = axios.post(`${url}/event/ca/leaderboard`);
  return response;
};

export default getLeaderboard;
