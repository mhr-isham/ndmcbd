import styled from "@emotion/styled";
import { BluredBackground } from "../../styles/StylePresets";

export const StyledCheckboxElement = styled.div`
  position: relative;
  overflow: hidden;
  /* background-color: #181d23c7; */
  ${BluredBackground}
  width: 100%;
  border-radius: 10px;
  /* padding: 5px 15px 5px 5px; */
  padding-left: 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
