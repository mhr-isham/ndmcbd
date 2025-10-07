import styled from "@emotion/styled";
import { Container } from "@mui/material";

export const PageContainer = styled(Container)`
  min-height: 100%;
  /* padding-top: 50px; */
  padding: 50px 30px 0px 30px;

  ${(props) => props.theme.breakpoints.up("xs")} {
    margin-top: 15px;
  }
  ${(props) => props.theme.breakpoints.up("xs")} {
    margin-top: 30px;
  }
`;

export const ApplicationWrapper = styled.div`
  ${(props) => props.theme.breakpoints.up("sm")} {
    padding: 0px 30px;
  }

  @media (max-width: 1560px) and (min-width: 1238px) {
    padding: 0px 40px 0px 40px;
  }
  @media (max-width: 1237px) and (min-width: 890px) {
    padding: 0px 40px 0px 40px;
  }

  /* ${(props) => props.theme.breakpoints.up("md")} {
    padding: 0px;
  } */
`;

export const Section = styled.div`
  /* overflow: hidden; */
  position: relative;
  box-sizing: border-box;
  ${(props) => props.theme.breakpoints.up("lg")} {
    min-height: 100vh;
  }
  padding: 50px 0px;
  display: flex;
  align-items: center;
`;

{
  /* <Container variant="lg" sx={{ mt: { xs: 5, lg: 11 }, pt: 10 }}> */
}
