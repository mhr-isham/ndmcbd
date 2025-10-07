import { StyledBgBox } from "../../pages/type-registration/index.styles";
import { Text } from "../styles/Elements.style";

const TitledStyledBox = ({ title, children }) => {
  return (
    <StyledBgBox>
      <Text style={{ marginBottom: "20px" }}>{title}</Text>
      {children}
    </StyledBgBox>
  );
};

export default TitledStyledBox;
