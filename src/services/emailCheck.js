import { useRecoilState } from "recoil";
import { checkEmail } from "../api/checkEmail";
import { emailStatus } from "../store/atoms/emailCheckAtom";

export const emailCheck = (email) => {
  const [status, setStatus] = useRecoilState(emailStatus);

  const isAvailable = checkEmail(email);
  isAvailable.then((data) => {
    if (data.status === 1) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  });

  return status;
};
