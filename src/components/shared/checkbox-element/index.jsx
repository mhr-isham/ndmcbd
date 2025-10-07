import { Checkbox } from "@mui/material";
import { Text } from "../../styles/Elements.style";
import { BluredBackground } from "../../styles/StylePresets";
import { StyledCheckboxElement } from "./index.styles";
import Splash from "../../ui/Splash";

const CheckBoxElement = ({
  children,
  handleChecked,
  id,
  name = "",
  ...props
}) => {
  return (
    <StyledCheckboxElement>
      <Checkbox
        onChange={(e) => handleChecked(e, id)}
        id={id}
        name=""
        {...props}
      />
      <label htmlFor={id} style={{ cursor: "pointer", width: "100%" }}>
        <Text
          design={{ size: "xs" }}
          style={{
            display: "inline-block",
            padding: "15px 10px",
          }}
        >
          {children}
        </Text>
      </label>
      <Splash size={0.1} position={{ right: 0 }} />
    </StyledCheckboxElement>
  );
};

export default CheckBoxElement;
