import { checkLogin } from "../services/authenticationServices";

const useLogin = ({ roll, password }) => {
  const getUserStatus = checkLogin({ roll, password });
  if (getUserStatus.status === 1) {
    sessionStorage.setItem("token", getUserStatus.hash);
  }
};

export default useLogin;
