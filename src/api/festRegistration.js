import axios from "axios";
import { url } from "../services/url";
import { useRecoilValue } from "recoil";
import { generalLoading } from "../store/atoms/loading";
import { useEffect } from "react";

export const soloRegistration = (data) => {
  const returnedData = axios.post(`${url}/event/solo/signup`, {
    ...data,
  });
  return returnedData;
};

export const teamRegistration = (data) => {
  const returnedData = axios.post(`${url}/event/team/signup`, {
    ...data,
  });
  return returnedData;
};

export const CheckFestStatus = () => {
  const festStatus = axios.post(`${url}/event/status`);
  return festStatus;
};

export const SoloBulkRegister = (data) => {
  const response = axios.post(`${url}/event/solo/signup`, { ...data });
  return response;
};
