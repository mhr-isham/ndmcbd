import styled from "@emotion/styled";
import { RoundedBox } from "../../styles/Elements.style";
import { BluredBackground, typography } from "../../styles/StylePresets";
export const TestimonialContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 40px;
  position: relative;
  ${BluredBackground}

  @media screen and (min-width: 970px) and (max-width: 1240px) {
    height: 210px;
  }
  @media screen and (min-width: 1240px) and (max-width: 1424px) {
    height: 280px;
  }
  @media screen and (min-width: 1424px) {
    height: 260px;
  }
`;

export const TestimonialHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & i {
    color: ${(props) => props.theme.palette.primary.lowLight};
  }
`;

export const TestimonialAuthorContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const TestimonialImage = styled(RoundedBox)`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;

  background-repeat: no-repeat;
`;

export const TestimonialDescription = styled.div`
  font-size: ${() => typography.sm};
  text-align: justify;
  ${(props) => props.theme.breakpoints.down("sm")} {
    margin-top: 15px;
  }
`;
