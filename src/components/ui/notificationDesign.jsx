import styled from "@emotion/styled";
import { MaterialDesignContent } from "notistack";

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-success": {
    backgroundColor: "#604cbbbb",
    // background:
    //   "linear-gradient(45deg, hsla(252, 61%, 48%, 1) 60%, hsla(244, 100%, 71%, 1) 97%)",
  },
  "&.notistack-MuiContent-error": {
    backgroundColor: "#970C0C",
  },
}));

export default StyledMaterialDesignContent;
