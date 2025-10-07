import { IconButton } from "@mui/material";
import { StyledIconButton } from "../styles/Elements.style";
import Icon from "./Icon";

const MyIconButton = ({ icon, icontype, ...props }) => {
  return (
    <StyledIconButton {...props}>
      <Icon icon={icon} icontype={icontype || "line"} />
    </StyledIconButton>
  );
};

export default MyIconButton;
