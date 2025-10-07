import { atom } from "recoil";

const mode = atom({
  key: "appMode",
  default: "dark",
});

export default mode;
