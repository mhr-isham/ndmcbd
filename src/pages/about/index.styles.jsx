import styled from "@emotion/styled";
import { BluredBackground } from "../../components/styles/StylePresets";
import bgImg from "../../assets/aboutIntro.webp";
import { Grid } from "@mui/material";

export const AboutStyledBanner = styled.div`
  text-align: center;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: url(${bgImg});

  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  background-color: #000;
  clip-path: ellipse(100% 55% at 48% 44%);
`;

export const AboutInnerBanner = styled.div`
  width: 200px;
  height: 200px;
  padding: 30px;
  /* ${BluredBackground} */
`;

export const TitleWrapper = styled.div`
  /* width: 50%; */
  /* height: %; */
  color: #00000070;
  ${BluredBackground}
  padding: 0px 30px;

  &#title {
    mix-blend-mode: overlay;
  }
`;

export const Clip = styled.div`
  width: fit-content;
  padding: 15px 20px;
  border-radius: 15px;
  ${BluredBackground}
  ${(props) => props.theme.breakpoints.down("md")} {
    width: 100%;
    text-align: center;
  }

  transition: 0.5s;
  &:hover {
    /* cursor: pointer; */
    transform: scale(1.02);
  }
`;

export const MissionGridLayout = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  column-gap: 1rem;
  justify-content: center;

  ${(props) => props.theme.breakpoints.down("md")} {
    justify-content: flex-start;
    flex-direction: column;
  }
`;
