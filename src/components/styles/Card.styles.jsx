import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { BluredBackground } from "./StylePresets";

export const CardContainer = styled.div`
  /* max-width: 350px;
  min-width: 200px; */
  width: 100%;
  position: relative;
  margin: 10px 0px;
  ${BluredBackground}
  height: 300px;
  cursor: pointer;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* padding: 0px 20px; */

  &:hover {
    transform: scale(1.02);
  }
`;

export const CardContent = styled.div`
  width: 100%;
  padding: 0px 20px;
`;

export const CardUpper = styled.div`
  /* width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => {
    const palette = props.theme.palette.primary;
    // const color1 = palette.main;
    const color2 = palette.light;
    const color3 = palette.dark;

    return `linear-gradient(80deg,${color3},${color3},${color2})`;
  }};
  clip-path: circle(50% at 70px 0px);
  backdrop-filter: blur(20px);
  border-radius: 10px; */

  & div {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    box-shadow: none;

    /* transform: translateX(-60px) translateY(-30px); */
    & i {
      font-size: 3.5rem;
      color: ${(props) => props.theme.palette.primary.main};
    }
    /* transform: translateY(-50px); */
  }
`;
