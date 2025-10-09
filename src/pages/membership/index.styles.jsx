import styled from "@emotion/styled";
import { BluredBackground } from "../../components/styles/StylePresets";
import bgImg from "../../assets/aboutintro.png";

export const MembershipBanner = styled.div`
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

export const TitleWrapper = styled.div`
  color: #00000070;
  ${BluredBackground}
  padding: 0px 30px;

  &#title {
    mix-blend-mode: overlay;
  }
`;

export const MembershipTitle = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 30px;
  color: ${(props) => props.theme.palette.primary.main};
`;

export const MembershipSection = styled.div`
  margin-top: 40px;
`;

export const SectionTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: ${(props) => props.theme.palette.primary.main};
`;
