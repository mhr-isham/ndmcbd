import styled from "@emotion/styled";
import { BluredBackground } from "../../components/styles/StylePresets";
import { Grid } from "@mui/material";

export const ContactBox = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  ${BluredBackground}
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  overflow: hidden;
`;

export const ContactInnerBox = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  border-radius: 10px;
  ${BluredBackground}
  padding: 30px 20px;
  margin-top: 50px;
`;

export const FlexEqualBox = styled(Grid)`
  flex: 1;
  ${(props) => props.theme.breakpoints.down("md")} {
    flex: 0;
  }
`;
