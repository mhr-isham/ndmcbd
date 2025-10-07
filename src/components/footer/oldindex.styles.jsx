import styled from "@emotion/styled";
import { BluredBackground, typography } from "../styles/StylePresets";
import {
  FlexedBox,
  RoundedBox,
  StyledLink,
  Text,
} from "../styles/Elements.style";
import { Link } from "react-router-dom";
import Logo from "../../assets/footerLogo.png";
import { Grid, Typography } from "@mui/material";

export const FooterWrapper = styled.div`
  display: block;
  position: relative;
  bottom: 0;
  left: 0;
  margin-top: 100px;
`;

export const FooterContainer = styled.div`
  width: auto;
  padding: 40px 30px 10px 40px;
  ${BluredBackground}
  color: ${(props) => props.theme.palette.text.main};
`;

export const FooterTitle = styled.div`
  font-size: 1.7rem;
`;

export const FooterLogo = styled.div`
  width: ${(props) => (props.size?.default ? props.size.default : "10px")};
  ${(props) => props.theme.breakpoints.up("lg")} {
    width: ${(props) => (props.size?.lg ? props.size.lg : "100px")};
  }
  ${(props) => props.theme.breakpoints.up("xl")} {
    width: ${(props) => (props.size?.xl ? props.size.xl : "400px")};
  }
`;

export const FooterHeader = styled.div`
  font-size: 1.4rem;
`;

export const FooterLinks = styled.div`
  font-size: 0.8rem;
  /* text-align: center; */
`;

export const FooterCopy = styled.div`
  font-size: 0.9rem;
`;

export const FooterIconBox = styled(RoundedBox)`
  /* background: #fff; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: ${(props) => props.theme.palette.primary.main};
  cursor: pointer;
  margin-top: 30px;

  &:hover {
    transform: scale(1.003);
  }
`;

export const StyledAddress = styled(Text)`
  text-align: right;
  ${(props) => props.theme.breakpoints.down("md")} {
    text-align: left;
  }
`;

export const StyledIconBox = styled(FlexedBox)`
  width: 100%;
  gap: 0.5rem;
  justify-content: center;
  ${(props) => props.theme.breakpoints.down("md")} {
    justify-content: flex-start;
  }
`;

export const FooterIcon = styled.div`
  display: flex;
  justify-content: flex-sart;
`;

export const FooterConnect = styled(FooterHeader)`
  text-align: center;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  padding: 0;
  margin: 0;
  & i {
    font-size: 1.5rem !important;
    margin: 0px 5px;
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

export const FooterLogoImage = styled.div`
  width: 300px;
  height: 50px;
  background: url(${Logo});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

// export const FooterImageGrid = styled(Grid)`
//   justify-content: center;
//   gap: 1rem;
// `;

// export const FooterContentGrid = styled(Grid)`
//   padding: 0px 0px 0px 15px;
// `;

// export const FooterContentTitle = styled.h4`
//   font-size: ${typography.xs}rem;
//   text-transform: uppercase;
//   font-weight: bold;
//   /* letter-spacing: 1rem; */
// `;

// export const FooterLink = styled.a`
//   font-size: ${typography.xxs}rem;
//   text-decoration: none;
// `;
