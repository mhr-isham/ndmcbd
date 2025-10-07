import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadImage, UploadImageWrapper } from "./index.styles";
import Icon from "../ui/Icon";
import { MagicButton, Text } from "../styles/Elements.style";
import { useRecoilState } from "recoil";
import { isCaImageUploaded } from "../../store/atoms/profile";
import axios from "axios";
import { caProfile } from "../../store/atoms/caProfile";
import { enqueueSnackbar } from "notistack";
import NdmcModal from "../ui/ndmc-modal";
import { Cropper } from "react-cropper";
import { Box } from "@mui/material";
import { CardBox } from "../../pages/fest-registration/index.styles";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Splash from "../ui/Splash";

const StyledHeading = styled.p`
  margin-top: 5px;
  span {
    margin-right: 0;
    padding-right: 0;
    box-sizing: border-box;
    font-weight: 500;
    margin-right: 10px;
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

const Dropzone = ({
  isNewUploaded,
  setNewUploaded,
  imageLoading,
  setImageLoading,
}) => {
  const theme = useTheme();
  const [open, setModal] = useState(false);
  const [uploadedImage, setUploadedImage] = useState("");
  const [isImageUploaded, setImageUploadStatus] =
    useRecoilState(isCaImageUploaded);
  const [caProfileInfo, setCaProfile] = useRecoilState(caProfile);
  const cropperRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    if (
      acceptedFiles[0]?.type === "image/jpeg" ||
      acceptedFiles[0]?.type === "image/png"
    ) {
      if (acceptedFiles[0].size < 3145728) {
        setUploadedImage(acceptedFiles[0]);
        setModal(true);
      } else {
        enqueueSnackbar("File must be less than 3 MB", { variant: "warning" });
      }
    } else {
      enqueueSnackbar("Only png and jpg images are supported", {
        variant: "warning",
      });
    }
  });

  const handleCrop = async () => {
    setModal(false);
    if (cropperRef.current) {
      const canvas = cropperRef.current.cropper.getCroppedCanvas({
        width: 1200,
        height: 1200,
      });
      const croppedImage = canvas.toDataURL("image/png");

      setCaProfile((prev) => ({
        ...prev,
        image: croppedImage,
      }));
      setNewUploaded(true);
      setImageLoading(true);

      const formData = new FormData();
      formData.append("file", croppedImage);
      formData.append("upload_preset", "ndmc-cdn1");

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${"ndmc-cdn1"}/image/upload`,
        formData
      );
      if (response.data.secure_url) {
        const uploadedNewImage = response.data.secure_url;
        setCaProfile((prev) => ({
          ...prev,
          image: uploadedNewImage,
        }));
        setNewUploaded(true);
        setImageUploadStatus(true);
        enqueueSnackbar("Image Uploaded", { variant: "success" });
        setImageLoading(false);
      }
    }
  };
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          flexDirection: "column",
          // marginTop: "100px",
        }}
      >
        <CardBox style={{ textAlign: "left", marginBottom: "30px" }}>
          <StyledHeading>
            <span>&#x25cf;</span>
            <b>Photo:</b> Choose a professional, well-lit portrait with your
            face in focus.
          </StyledHeading>
          <StyledHeading>
            <span>&#x25cf;</span>
            <b>Camera:</b> Face the camera directly.
          </StyledHeading>
          <StyledHeading>
            <span>&#x25cf;</span>
            <b>Mask:</b> No masks allowed.
          </StyledHeading>
          <StyledHeading>
            <span>&#x25cf;</span>
            <b>Visibility:</b> Shoulders and hands must be visible.
          </StyledHeading>
          <StyledHeading>
            <span>&#x25cf;</span>
            <b>Format & Size:</b> Upload in .png, .jpg, or .jpeg format. Size
            must not exceed 3 MB.
          </StyledHeading>

          <Splash size={0.25} />
        </CardBox>
        <div {...getRootProps({ className: "dropzone disabled" })}>
          <input {...getInputProps()} />

          <UploadImageWrapper>
            <UploadImage img={isNewUploaded ? caProfileInfo.image : ""}>
              <div>
                <Icon icontype={"line"} icon={"camera"} />
                <Text>Upload Image</Text>
              </div>
            </UploadImage>
          </UploadImageWrapper>
          <div>
            <Text style={{ marginTop: "20px" }}>
              {imageLoading ? "Uploading..." : ""}
            </Text>
          </div>
        </div>
        <NdmcModal
          open={open}
          modalTitle="Crop Your Image"
          handleClose={() => setModal(false)}
        >
          <Cropper
            ref={cropperRef}
            aspectRatio={1 / 1}
            // cropBoxResizable={false}
            src={uploadedImage && URL.createObjectURL(uploadedImage)}
            style={{ height: "400px", width: "100%" }}
            // initialAspectRatio={1}
            zoomOnWheel={true}
          />
          <Box sx={{ mt: 2, textAlign: "right" }}>
            <MagicButton variant={"contained"} onClick={handleCrop}>
              Crop and Continue
            </MagicButton>
          </Box>
        </NdmcModal>
      </div>
    </Box>
  );
};

export default Dropzone;
