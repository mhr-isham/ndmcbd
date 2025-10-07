import { atom } from "recoil";
const caUser = JSON.parse(sessionStorage.getItem("caUser"));
export const caProfile = atom({
  key: "caUserProfile",
  default: caUser ? caUser : {},
});

export const isCa = atom({
  key: "isCaUser",
  default: false,
});
