import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import { Section } from "./Page.style";
import { Swiper, SwiperSlide } from "swiper/react";
import { BluredBackground, typography } from "./StylePresets";

export const LogoContainer = styled(Box)`
  display: flex;
  ${(props) => props.theme.breakpoints.up("md")} {
    justify-content: flex-end;
  }
  ${(props) => props.theme.breakpoints.down("lg")} {
    justify-content: center;
  }
  /* ${(props) => props.theme.breakpoints.up("xs")} {
    justify-content: center;
  } */
`;

export const SizedContainer = styled(Box)`
  width: ${(props) => (props.size?.default ? props.size.default : "200px")};
  text-align: center;
  /* ${(props) => props.theme.breakpoints.up("md")} {
    width: ${(props) => (props.size?.md ? props.size.md : "300px")};
  }
  ${(props) => props.theme.breakpoints.up("lg")} {
    width: ${(props) => (props.size?.lg ? props.size.lg : "400px")};
  } */

  ${(props) => props.theme.breakpoints.up("xl")} {
    width: ${(props) => (props.size?.xl ? props.size.xl : "450px")};
  }
  ${(props) => props.theme.breakpoints.down("xl")} {
    width: ${(props) => (props.size?.xl ? props.size.xl : "400px")};
  }
  ${(props) => props.theme.breakpoints.down("lg")} {
    width: ${(props) => (props.size?.xl ? props.size.xl : "350px")};
  }
  ${(props) => props.theme.breakpoints.down("md")} {
    width: ${(props) => (props.size?.xl ? props.size.xl : "250px")};
  }
  ${(props) => props.theme.breakpoints.down("sm")} {
    width: ${(props) => (props.size?.xl ? props.size.xl : "200px")};
  }
`;

export const HeroContainer = styled(Section)`
  min-height: 50vh !important;
  padding: calc(100vw * 7 / 100) 0px;
  display: block;
`;

export const StyledHeading = styled(Typography)`
  font-weight: 700;
  font-size: 4rem;
  margin: 0.2rem 0rem 0.8rem 0px;
  text-align: center;
  text-transform: uppercase;
  ${(props) => props.theme.breakpoints.up("lg")} {
    text-align: start;
  }
  ${(props) => props.theme.breakpoints.down("xl")} {
    font-size: ${() => `${typography.xxl}rem`};
  }
  ${(props) => props.theme.breakpoints.down("lg")} {
    font-size: ${() => `${typography.xl}rem`};
  }
  ${(props) => props.theme.breakpoints.down("md")} {
    font-size: ${() => `${typography.lg}rem`};
  }
  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: ${() => `${typography.sm}rem`};
  }

  @media screen and (min-width: 1238px) and (max-width: 1360px) {
    font-size: 2.9rem;
  }
  @media screen and (min-width: 598px) and (max-width: 626px) {
    font-size: 2.4rem;
  }
`;

export const SquareBox = styled(Box)(
  ({ theme }) => `
  width:100%;
  height:110px;
  
  background: ${
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(255, 255, 255, 0.3)"
  };
  border-radius:10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15.5px);
  --webkit-backdrop-filter: blur(15.5px);
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center
  


`
);

//  Typography

// Slide

export const StyledSlider = styled(Swiper)`
  /* ${BluredBackground} */
  padding: 50px 20px;
  @media screen and (max-width: 981px) and (min-width: 850px) {
    padding: 50px 0px;
  }
  @media screen and (max-width: 520px) {
    padding: 50px 0px;
  }
  .swiper-pagination-bullet {
    background-color: ${(props) => props.theme.palette.primary.light};
  }
  .swiper-button-next {
    position: absolute;
    right: -2px;
  }
  .swiper-button-prev {
    position: absolute;
    left: -2px;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 30px;
    color: ${(props) => props.theme.palette.primary.main};

    /* @media screen and (max-width: 981px) and (min-width: 850px) {
      display: none;
    } */
    @media screen and (max-width: 981px) and (min-width: 0px) {
      display: none;
    }
  }
`;

export const StyledSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
`;

export const ImageBox = styled.div`
  width: 100%;
`;
