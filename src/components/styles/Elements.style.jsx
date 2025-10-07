import styled from "@emotion/styled";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Icon from "../ui/Icon";
import { typography, fontWeight, BluredBackground } from "./StylePresets";
import { Swiper } from "swiper/react";

// /////  Box /////

// ======================== Elements ========================= \\

/**
 * -----------------------------------------------------------
 *                         Box Style
 * ----------------------------------------------------------
 */

export const FlexedBox = styled.div`
  display: flex;
`;

export const StyledRightFlexBox = styled(FlexedBox)`
  text-align: right;
`;

export const FullWidthBox = styled.div`
  width: 100%;
`;

export const RoundedBox = styled.div`
  width: ${(props) => (props.size ? props.size : "100px")};
  height: ${(props) => (props.size ? props.size : "100px")};
  border-radius: 100%;
`;

export const SectionTitleContainer = styled.div`
  text-align: center;
`;

export const SectionContainer = styled.div`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin: 30px 0px;
  width: 100%;
  text-align: center;
  ${(props) => props.theme.breakpoints.up("lg")} {
    text-align: right;
  }
`;

export const FlexedResponsive = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ${(props) => props.theme.breakpoints.up(props.breakpoint)} {
    justify-content: flex-start;
  }
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
`;

export const IconBox = styled.div`
  font-size: ${(props) => props.fontSize};
`;

export const PageTitleContainer = styled.div`
  margin-bottom: 100px;
  text-align: center;
`;

export const CenterButtonBox = styled.div`
  width: 100%;
  text-align: center;
`;

//================  Box style End ================== \\

/**
 * -----------------------------------------------------------
 *                         Grid Related Style
 * ----------------------------------------------------------
 */

export const StyledGridContainer = styled(Grid)`
  width: 100%;
  align-items: ${(props) => (props.center ? "center" : "inherit")};
  flex-direction: ${(props) =>
    props.layout?.default ? props.layout.default : "row"};
  ${(props) => props.theme.breakpoints.up("xl")} {
    flex-direction: ${(props) => props.layout?.xl};
  }
  ${(props) => props.theme.breakpoints.up("lg")} {
    flex-direction: ${(props) => props.layout?.lg};
  }
  ${(props) => props.theme.breakpoints.up("md")} {
    flex-direction: ${(props) => props.layout?.md};
  }
  ${(props) => props.theme.breakpoints.up("sm")} {
    flex-direction: ${(props) => props.layout?.sm};
  }
  ${(props) => props.theme.breakpoints.up("xs")} {
    flex-direction: ${(props) => props.layout?.xs};
  }
`;

export const SectorSection = styled(StyledGridContainer)`
  justify-content: space-evenly;
  column-gap: 10px;
  row-gap: 10px;
  ${(props) => props.theme.breakpoints.down("xs")} {
    justify-content: space-evenly;
  }
  ${(props) => props.theme.breakpoints.down("sm")} {
    ${(props) => {
      if (props.stretch) {
        return `align-items:stretch`;
      }
    }}
  }
`;

export const EventContainer = styled(SectorSection)`
  column-gap: 0px;

  /* flex-wrap: wrap; */
  margin: auto;
`;

export const CenterGrid = styled(Grid)`
  justify-content: center;
  position: relative;
`;
export const SpaceBetweenGrid = styled(Grid)`
  justify-content: space-between;
`;

export const StyledGrid = styled(Grid)`
  justify-content: inherit;

  ${(props) => props.theme.breakpoints.down("md")} {
    justify-content: center;
  }
`;

//================  Grid style End ================== \\

/**
 * -----------------------------------------------------------
 *                         Button Style
 * -----------------------------------------------------------
 *
 */
export const ShiningButton = styled(Button)`
  display: inline-flex;
  position: relative;
  overflow: hidden;
  align-items: center;
  column-gap: 0.25rem;
  padding: 0.7rem 1.8rem;
  margin: ${(props) => props.gap};
  border-radius: 10px;
  outline: none;
  border: none;
  background-image: ${(props) => {
    const color1 = props.theme.palette.primary.midLight;
    const color2 = props.theme.palette.primary.deepDark;
    return `linear-gradient(
        45deg,
        ${color1} 9%,
        ${color2} 36%
      );`;
  }};
  &:before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    animation: shining 2000ms infinite;
    @keyframes shining {
      0% {
        left: -100px;
      }
      100% {
        left: 100%;
      }
    }
  }
`;
export const StyledButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  column-gap: 0.25rem;
  padding: 0.7rem 1.8rem;
  margin: ${(props) => props.gap};
  border-radius: 10px;
  outline: none;
  border: none;
  background: ${(props) => props.theme.palette.primary.midLight};
  /* background-image: linear-gradient(
    45deg,
    rgba(78, 47, 196, 1) 36%
  ); */
  background-image: ${(props) => {
    const color1 = props.theme.palette.primary.midLight;
    const color2 = props.theme.palette.primary.deepDark;
    return `linear-gradient(
    45deg,
    ${color1} 9%,
    ${color2} 36%
  );`;
  }};

  transition: all 0.4s;
  &:active {
    transform: scale(0.96);
  }

  color: "#fff ";
  & i {
    font-size: 1.5rem;
    transition: transform 0.3s;
  }
  &:hover i {
    transform: translateX(0.25rem);
  }
`;

export const MagicButton = ({ icon, children, variant, ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
      {icon && <Icon icon={icon} icontype={"line"} />}
    </StyledButton>
  );
};
export const MagicButtonWhite = ({ icon, children, variant, ...props }) => {
  return (
    <StyledButton
      variant={variant}
      {...props}
      sx={{ background: "#fff !important", color: "#000 !important" }}
    >
      {children}
      {icon && <Icon icon={icon} icontype={"line"} />}
    </StyledButton>
  );
};

export const ExclusiveButton = styled.button`
  padding: 15px 70px;
  border: 3px solid ${(props) => props.theme.palette.primary.light};
  color: ${(props) => props.theme.palette.text.main};
  border-radius: 10px;
  cursor: pointer;
  font-size: ${(porps) => `${typography.sm}rem`};
  background-color: ${(props) => props.theme.palette.background.default};
  box-shadow: 0 8px 24px hsla(243.75, 80%, 68.62745098039215%, 0.3);
`;

export const SecondaryButton = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 10px 20px;
  ${BluredBackground};
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: 500;
  color: ${(props) => props.theme.palette.text.main};
  font-size: 1rem;
  border-radius: 10px;
`;

export const SquareButton = styled(Button)`
  text-decoration: none;
  font-size: 1rem;
  display: inline-block;
  border-radius: 10px;
  padding: 10px 20px;
  font-weight: 500;
  background: ${(props) => props.theme.palette.primary.midLight};
  background-image: ${(props) => {
    const color1 = props.theme.palette.primary.midLight;
    const color2 = props.theme.palette.primary.deepDark;
    return `linear-gradient(
    45deg,
    ${color1} 9%,
    ${color2} 36%
  );`;
  }};
`;

// export const StyledIconButton = styled(IconButton)``;

//================  Button style End ================== \\

/**
 * -----------------------------------------------------------
 *                         Typography Styles
 * ----------------------------------------------------------
 */

export const Subtitle = styled(Typography)`
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: 300;
  letter-spacing: 0.2rem;
  margin-top: 30px;
  padding: 10px 0px;
  font-size: ${(props) => `${typography.xs}rem`};
  text-align: ${(props) => (props.align ? props.align : "center")};

  ${(props) => props.theme.breakpoints.up("lg")} {
    text-align: inherit;
  }

  ${(props) => props.theme.breakpoints.up("sm")} {
    font-size: ${(props) => `${typography.lsm}rem`};
  }
  ${(props) => props.theme.breakpoints.up("md")} {
    font-size: ${(props) => `${typography.sm}rem`};
  }
  /* ${(props) => props.theme.breakpoints.down("sm")} {
    text-align: center !important;
  } */
`;

export const SectionTitle = styled(Typography)`
  font-weight: 500;
  font-size: ${() => `${typography.xl}rem`};
  margin-bottom: 30px;

  ${(props) => props.theme.breakpoints.down("md")} {
    font-size: ${() => `${typography.lmd}rem`};
  }
  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: ${() => `${typography.sm}rem`};
  }
  color: ${(props) => (props.color ? props.theme.palette.primary.main : "")};
`;
export const SectionSubtitle = styled(Subtitle)`
  margin-top: 0px !important;
  padding: 0px !important;
  font-size: ${() => `${typography.sm}rem`};
  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: ${() => `${typography.xs}rem`};
    text-align: center;
  }
`;

export const Description = styled(Typography)`
  color: ${(props) => props.theme.palette.text.light};
  ${(props) => {
    if (props.color) {
      return `color: ${props.color}`;
    }
  }}
  margin: 15px 0px 30px 0px;
  text-align: ${(props) => (props.align ? props.align : "center")};
  ${(props) => props.theme.breakpoints.up("lg")} {
    text-align: ${(props) => props.align};
  }
  font-size: ${(props) => (props.fontSize ? props.fontSize : "inherit")};
`;

export const Text = styled(Typography)`
  font-size: ${(props) => typography[props.design?.size] + "rem"};
  font-weight: ${(props) => fontWeight[props.design?.weight]};
  ${(props) => {
    if (Boolean(props.capitalize)) {
      return `
        text-transform:capitalize
      
      `;
    }
  }}
  ${(props) =>
    props.colored === "main" ? `color:${props.theme.palette.primary.main}` : ""}

    ${(props) => props.theme.breakpoints.down("md")} {
    font-size: ${(props) => typography[props.design?.size] * 0.7 + "rem"};
  }
`;

export const StyledDescription = styled(Description)`
  margin-bottom: 45px;
  margin-top: 20px;
`;

export const ResponsiveText = styled(Text)`
  ${(props) => props.theme.breakpoints.down("xl")} {
    font-size: ${(props) => typography[props.design?.size] * 0.9 + "rem"};
  }
  ${(props) => props.theme.breakpoints.down("lg")} {
    font-size: ${(props) => typography[props.design?.size] * 0.8 + "rem"};
  }
  ${(props) => props.theme.breakpoints.down("md")} {
    font-size: ${(props) => typography[props.design?.size] * 0.7 + "rem"};
  }
  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: ${(props) => typography[props.design?.size] * 0.6 + "rem"};
  }
`;

export const ColoredText = styled(Text)`
  color: ${(props) => props.theme.palette.primary.main};
`;
// This Text is used everywhere in the application

//================  Typography style End ================== \\

/**
 * -----------------------------------------------------------
 *                         Image Style
 * -----------------------------------------------------------
 */

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 20px;
`;

//===================  Image style End ===================== \\

/**
 * -----------------------------------------------------------
 *                         Link Style
 * ----------------------------------------------------------
 */

export const StyledLink = styled(Link)(
  ({ theme }) => `
text-decoration:none;
color:${theme.palette.text.main}
`
);

export const NavMenuLink = styled(Link)`
  color: ${(props) => props.theme.palette.text.main};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

export const Styleda = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.palette.text.main};
`;

//================  Link style End ================== \\

/**
 * -----------------------------------------------------------
 *                         Icon Styles
 * ----------------------------------------------------------
 */

export const StyledIconButton = styled(IconButton)``;

export const StyledSwiper = styled(Swiper)`
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 30px;
    color: ${(props) => props.theme.palette.primary.main};
  }
  .swiper-wrapper {
    display: flex;
    align-items: center;
  }
`;

//================  Icon style End ================== \\
`;

// =====================->>>>>> DON'T DELETE ANY COMMENTED CODE   <<<<<<-====================  \\

// export const SectionSubtitle=styled(Typography) `;
// color: ${(props) => props.theme.palette.primary.main};
//   font-weight: 300;
//   letter-spacing: 0.2rem;
//   margin-top: 30px;
//   padding: 10px 0px;
//   text-align: center;
//   ${(props) => props.theme.breakpoints.up("lg")} {
//     text-align: inherit;
//   }

// `
