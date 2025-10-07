import styled from "@emotion/styled";
import { Swiper } from "swiper/react";

export const GallerySwiper = styled(Swiper)`
  .swiper-button-prev:after,
  .swiper-button-next:after {
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

export const AutoPlay = styled.i`
  position: absolute;
  display: inline-block;
  right: 70px;
  top: 17px;

  font-size: 20px;
  cursor: pointer;
  & :hover {
    color: #4e2fc4;
  }
`;
