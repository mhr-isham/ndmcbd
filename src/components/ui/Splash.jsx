import styled from "@emotion/styled";
import { Box } from "@mui/material";

const Splash = styled(Box)`
  @keyframes splash {
    0% {
      transform: "scale3d(1.06, 1.06, 1.06)";
      background: ${(props) => props.theme.palette.primary.deepDark};
    }
    50% {
      transform: scale3d(1.04, 1.04, 1.04);
      background: ${(props) => props.theme.palette.primary.midLight};
    }
    100% {
      transform: scale3d(1.02, 1.02, 1.02);
      background: ${(props) => props.theme.palette.primary.deepDark};
    }
  }
  @media (max-width: 500px) {
    width: ${(props) => props.minWidth};
  }
  position: absolute;
  width: calc(500px * ${(props) => (props.size ? props.size : 0.7)});
  left: ${(props) => (props.position?.left ? props.position?.left : "")};
  right: ${(props) => (props.position?.right ? props.position?.right : "")};
  top: ${(props) => (props.position?.top ? props.position?.top : "")};
  bottom: ${(props) => (props.position?.bottom ? props.position?.bottom : "")};
  height: calc(100vh * 0.2);
  filter: blur(120px);
  -webkit-filter: blur(120px);
  border-radius: 100%;
  animation: splash 4s ease-in-out infinite;
  z-index: -10;
  ${(props) => props.theme.breakpoints.down("sm")} {
    width: calc(300px * ${(props) => (props.size ? props.size : 0.7)});
  }
`;
export default Splash;
