import styled from "@emotion/styled";
import { BluredBackground } from "../../components/styles/StylePresets";
import { Grid } from "@mui/material";

export const RegistrationContainer = styled.div`
  padding: 0px 0px 0px 0px;
  ${(props) => props.theme.breakpoints.down("md")} {
    padding: 0px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardBox = styled.div`
  ${BluredBackground}
  width: 100%;
  height: ${(props) => (props.long ? props.long : "100%")};
  position: relative;
  overflow: hidden;
  padding: 40px 30px;
`;

export const FestImageBox = styled.div`
  width: 100%;
  height: ${(props) => (props.long ? props.long : "180px")};
  border-radius: 10px;
  background: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  gap: 2rem;

  ${(props) => props.theme.breakpoints.up("sm")} {
    height: 330px;
  }
  ${(props) => props.theme.breakpoints.up("md")} {
    height: 500px;
    gap: 4rem;
  }
  ${(props) => props.theme.breakpoints.up("lg")} {
    height: 280px;
  }
  ${(props) => props.theme.breakpoints.up("xl")} {
    height: 300px;
  }
`;

export const FestCardBox = styled(Grid)`
  gap: 2rem;
  justify-content: center;
  ${(props) => props.theme.breakpoints.up("sm")} {
    gap: 4rem;
  }
`;

export const FlexButtonBox = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  margin-top: 25px;
  ${(props) => props.theme.breakpoints.down("sm")} {
    ${(props) =>
      props.responsive ? "justify-content: center !important;" : ""}
  }
`;

export const FestButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  ${(props) => props.theme.breakpoints.up("sm")} {
    flex-direction: row;
  }
`;
