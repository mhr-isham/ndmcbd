import { useEffect } from "react";
import { RegistrationContainer } from "../fest-registration/index.styles";
import { FormContainer } from "./index.styles";
import { enqueueSnackbar } from "notistack";
import Dropzone from "../../components/dropzone";

const CaAdditional = ({ caImg }) => {
  useEffect(() => {
    if (caImg) {
      enqueueSnackbar("Image Uploaded", { variant: "success" });
    }
  }, [caImg]);

  return (
    <RegistrationContainer>
      <FormContainer style={{ height: "400px" }}>
        <div>
          <Dropzone />
        </div>
      </FormContainer>
    </RegistrationContainer>
  );
};

export default CaAdditional;
