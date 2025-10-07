import { atom } from "recoil";

const leaderboard = atom({
  key: "caLeatherBoard",
  default: [],
});

export default leaderboard;
