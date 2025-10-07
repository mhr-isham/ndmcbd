import styled from "@emotion/styled";
import { Grid, TextField } from "@mui/material";
import { BluredBackground } from "../../components/styles/StylePresets";
import {
  MagicButton,
  MagicButtonWhite,
  Text,
} from "../../components/styles/Elements.style";
import confirmationImage from "../../assets/confirmationEmail.png";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonGrid = styled(Grid)`
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 3rem 0rem;
`;

export const InputField = styled(TextField)`
  .css-9425fu-MuiOutlinedInput-notchedOutline {
    border-color: green;
  }

  .Mui-focused {
    border-color: red;
    box-shadow: 0px 8px 3px blue;
  }

  .css-1k9ipw3-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: blue;
  }
`;

export const StyledForm = styled.form`
  width: 60%;
  margin-top: 5rem;

  ${(props) => props.theme.breakpoints.down("md")} {
    width: 100%;
  }
`;

export const RegistrationStatusBox = styled.div`
  width: 70%;
  height: 50%;
  margin: 40px auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & i {
    font-size: 20rem;
    background: ${(props) => props.theme.palette.primary.main};
    color: #fff;
  }
`;

export const StyledBgBox = styled.div`
  ${BluredBackground}
  padding: 20px 30px;
  margin: 15px 0px;
`;

export const MarginedBox = styled.div`
  margin: 40px 0px;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  justify-content: center;
  flex-direction: row;
  height: 100%;
`;

export const ProfileImgBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

export const EmailVerificationStep = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmailVerificationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  max-width: 500px;

  & p {
    text-align: center;
  }
`;

export const EmailIconBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: #d2f8de;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
  margin: 20px 0px;

  & i {
    font-size: 1.5rem;
    color: #228e5c;
  }
`;

// Solo Bulk Registration

export const SoloUploadBox = styled.div`
  width: 100%;
  border: 2px dashed ${(props) => props.theme.palette.primary.main};
  padding: 30px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const FestTitle = styled(Text)`
  /* color: ${(props) => props.theme.palette.primary.main}; */
`;

export const ConfirmationImageBox = styled.div`
  margin: 0px auto 70px auto;
  position: relative;
  ${(props) => props.theme.breakpoints.up("sm")} {
    width: 60vw;
  }
  ${(props) => props.theme.breakpoints.up("md")} {
    width: 57vw;
  }
`;

export const StyledCaBtnWhite = styled(MagicButtonWhite)`
  width: 30%;
  ${(props) => props.theme.breakpoints.up("md")} {
    width: 13%;
  }
`;
export const StyledCaBtn = styled(MagicButton)`
  width: 30%;
  ${(props) => props.theme.breakpoints.up("md")} {
    width: 13%;
  }
`;

export const ResponsiveMagicBtnWhite = styled(MagicButtonWhite)`
  width: 40%;
  ${(props) => props.theme.breakpoints.up("md")} {
    width: 30%;
  }
  &:disabled {
    color: rgba(255, 255, 255, 0.3) !important;
    background-color: rgba(255, 255, 255, 0.3) !important;
  }
`;
export const ResponsiveMagicBtn = styled(MagicButton)`
  width: 40%;
  ${(props) => props.theme.breakpoints.up("md")} {
    width: 30%;
  }
`;
