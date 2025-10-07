import styled from "@emotion/styled";
import { BluredBackground } from "./StylePresets";

export const CardContainer = styled.div`
  width: 300px;
  height: 350px;
`;

export const CardInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  &:hover {
    transform: scale(1.01);
  }
`;

const FrontBack = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding: 0px;
`;

export const CardFront = styled(FrontBack)`
  width: 100%;
  height: 100%;
  /* background: url(${(props) => props.img}); */
  background-size: cover;
  position: relative;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 15px;
`;

export const CardSkeleton = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  z-index: 10;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "100px")};
  text-align: center;
  padding: 30px 5px 10px 5px;
  position: absolute;
  bottom: 0;
  left: 0;

  color: #fff;
  background: rgba(0, 0, 0, 0.31);
  border-radius: 15px;
  margin-bottom: 0;
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  backdrop-filter: blur(9.1px);
  -webkit-backdrop-filter: blur(9.1px);
`;

export const CardLink = styled.a`
  text-decoration: none;
`;
