import styled from "@emotion/styled";
import { BluredBackground } from "../../components/styles/StylePresets";

export const EcContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

export const EcBox = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;

  &:hover {
    ${BluredBackground}
  }
`;
