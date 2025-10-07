import styled from "@emotion/styled";

export const NotFoundImageBox = styled.div`
  width: 73vw;
  margin: 10px auto;
  position: relative;
  ${(props) => props.theme.breakpoints.up("sm")} {
    width: 60vw;
  }
  ${(props) => props.theme.breakpoints.up("md")} {
    width: 40vw;
  }
`;
