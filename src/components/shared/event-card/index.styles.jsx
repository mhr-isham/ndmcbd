import styled from "@emotion/styled";
import { BluredBackground } from "../../styles/StylePresets";

export const EventCardContainer = styled.div`
  /* max-width: 390px; */
  max-width: 370px;
  height: 400px;
  ${BluredBackground};
  position: relative;
  flex-basis: 100%;
  overflow: hidden;
`;

export const EventImageBox = styled.div`
  height: 209px;
  background-image: url(${(props) => props.img});
  border-radius: 5px;
  background-position: top center;
  background-size: contain;
  background-origin: border-box;
  background-repeat: no-repeat;

  ${(props) => props.theme.breakpoints.down("md")} {
    background-size: cover;
  }
  @media screen and (max-width: 1358px) and (min-width: 1270px) {
    background-size: cover;
  }
`;

export const Badge = styled.div`
  padding: 15px 40px;
  border-radius: 10px;
  ${BluredBackground}
  position: absolute;
  right: 5px;
  font-weight: 700;
  background-color: #a600ff66;
  top: 10px;
  color: #fff;
`;

export const EventContentBox = styled.div`
  padding: 10px 20px 10px 20px;
  height: 23%;
`;

export const DateBox = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: baseline;
  padding: 5px;
`;

export const EventButtonContainer = styled.div`
  display: flex;
  padding: 10px 20px 30px 20px;
`;
