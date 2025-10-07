import { atom } from "recoil";

const events = atom({
  key: "eventsClub",
  default: [],
});

export default events;
