import { useEffect } from "react";
import { Section } from "../../components/styles/Page.style";
import caVerify from "../../api/caVerify";
import { useRecoilState } from "recoil";
import { caProfile } from "../../store/atoms/caProfile";
import { useParams } from "react-router-dom";

const CaVerify = () => {
  const params = useParams();
  const token = params.token ? params.token : "";

  const checkEmailStatus = async () => {
    const response = await caVerify(token);
  };
  useEffect(() => {
    checkEmailStatus();
  }, []);
  return <Section style={{ display: "block" }}></Section>;
};

export default CaVerify;
