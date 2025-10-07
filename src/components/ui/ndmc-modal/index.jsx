import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { StyledNdmcDialog } from "./index.styles";
import { useDropzone } from "react-dropzone";
import Icon from "../Icon";
import { Text } from "../../styles/Elements.style";
import { IconButton, Typography } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const NdmcModal = ({
  open,
  children,
  handleClose,
  fullscreen,
  maxWidth,
  actionTitle,
  handleSubmit,
  submit,
  modalTitle = "",
  variant,
}) => {
  return (
    <React.Fragment>
      <StyledNdmcDialog
        fullScreen={fullscreen}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth={maxWidth}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        variant={variant}
      >
        <DialogTitle
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            {modalTitle}
          </Typography>
          <IconButton onClick={handleClose}>
            <Icon icon="close" icontype="fill" />
          </IconButton>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Close</Button> */}
          {submit && <Button onClick={handleSubmit}>{actionTitle}</Button>}
        </DialogActions>
      </StyledNdmcDialog>
    </React.Fragment>
  );
};

export default NdmcModal;
