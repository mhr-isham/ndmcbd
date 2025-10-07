import { atom } from "recoil";

export const profileImg = atom({
  key: "caProfileImage",
  default: "",
});

const getCa = JSON.parse(sessionStorage.getItem("caUser"));
export const caUser = atom({
  key: "isCaAvailable",
  default: getCa?.email ? true : false,
});
//no use
export const caName = atom({
  key: "caUserName",
  default: "",
});

export const caImageFile = atom({
  key: "caImageFile",
  default: {},
});

export const isCaImageUploaded = atom({
  key: "isCaImageUploaded",
  default: false,
});
