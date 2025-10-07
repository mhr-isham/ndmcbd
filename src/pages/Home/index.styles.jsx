import styled from "@emotion/styled";
import { ButtonContainer } from "../../components/styles/Elements.style";

export const AboutImageBox = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background: url(${(props) => props.bgsrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${(props) => props.theme.breakpoints.up("sm")} {
    height: 300px;
  }
  ${(props) => props.theme.breakpoints.up("md")} {
    height: 350px;
  }
  ${(props) => props.theme.breakpoints.up("lg")} {
    height: 400px;
  }
  ${(props) => props.theme.breakpoints.up("xl")} {
    height: 450px;
  }
`;

export const SectionInfoContainer = styled.div`
  ${(props) => props.theme.breakpoints.down("sm")} {
    text-align: center;
  }
`;

export const HomeBtnContainer = styled(ButtonContainer)`
  text-align: center !important;
  ${(props) => props.theme.breakpoints.up("lg")} {
    text-align: left !important;
  }
`;
