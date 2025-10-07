import { useState, useRef, useCallback } from "react";
import {
  Typography,
  ListItem,
  List,
  Box,
  Paper,
  CircularProgress,
  Dialog,
  DialogActions,
  Stack,
} from "@mui/material";
import NdmcBreadcrumbs from "../../components/breadcrumbs";
import {
  PageTitleContainer,
  SectionSubtitle,
  SectionTitle,
} from "../../components/styles/Elements.style";
import { CardBox, FestCardBox } from "../fest-registration/index.styles";
import { StyledButton } from "../../components/styles/Elements.style";

import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Section } from "../../components/styles/Page.style";
import NdmcModal from "../../components/ui/ndmc-modal";
import { useDropzone } from "react-dropzone";
import { enqueueSnackbar } from "notistack";

const ImageFrameEditor = () => {
  const onDrop = useCallback((acceptedFiles) => {
    if (
      acceptedFiles[0]?.type === "image/jpeg" ||
      acceptedFiles[0]?.type === "image/png"
    ) {
      setInputImage(acceptedFiles[0]);
      setOpenModal(true);
    } else {
      enqueueSnackbar("Only png and jpg images are supported", {
        variant: "warning",
      });
    }
  });
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  const [inputImage, setInputImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [showPreviewModal, setPreviewModal] = useState(false);
  const [frameImage] = useState(
    "https://res.cloudinary.com/ndmc/image/upload/v1703428258/385544985_911217883384045_5876524687920403269_n_ky86zs.png"
  );
  const [outputImage, setOutputImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const cropperRef = useRef();

  const handleCrop = () => {
    if (cropperRef.current) {
      const croppedCanvas = cropperRef.current.cropper.getCroppedCanvas({
        width: 1200,
        height: 1200,
      });
      const croppedImageBase64 = croppedCanvas.toDataURL();
      setCroppedImage(croppedImageBase64);
      setOpenModal(false);
      addFrame(croppedImageBase64);
    }
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setInputImage(null);
  };

  const addFrame = (file) => {
    setLoading(true);

    const img = new Image();
    img.src = file;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const size = 1200; // Size of the square canvas

      canvas.width = size;
      canvas.height = size;

      const ctx = canvas.getContext("2d");

      ctx.strokeStyle = "#000";
      ctx.lineWidth = 10;
      ctx.strokeRect(0, 0, size, size);

      ctx.drawImage(img, 0, 0, size, size);

      const frame = new Image();
      frame.crossOrigin = "Anonymous";
      frame.src = frameImage;
      frame.onload = () => {
        ctx.drawImage(frame, 0, 0, size, size);
        setOutputImage(canvas.toDataURL("image/png"));
        setPreviewModal(true);
        setLoading(false);
      };
    };
  };

  const downloadImage = () => {
    if (outputImage) {
      const link = document.createElement("a");
      link.href = outputImage;
      link.download = `4th_NMF_${new Date().toLocaleDateString()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Section style={{ display: "block" }}>
      <PageTitleContainer>
        <SectionSubtitle>4th NDC National Math Festival</SectionSubtitle>
        <SectionTitle>Photo Frame</SectionTitle>
        <NdmcBreadcrumbs
          pagePath={[
            {
              name: "4th NMF",
              link: "/nmf",
            },
            {
              name: `Frame`,
              active: true,
            },
          ]}
        />
      </PageTitleContainer>

      <Stack sx={{ width: {"xs":"100%", "md" : "50%"}, margin: "auto" }}>
        <CardBox>
          <Typography variant="h5" mb={2}>
            Instructions:
          </Typography>

          <List>
            <ListItem>
              <Typography variant="body2">1. Add your image here.</Typography>
            </ListItem>

            <ListItem>
              <Typography variant="body2">
                2. Crop the image if needed and continue.
              </Typography>
            </ListItem>

            <ListItem>
              <Typography variant="body2">
                3. Download your new generated image!
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">
                4. Post on social media using the hashtag #4thNMF.
              </Typography>
            </ListItem>
          </List>

          <div
            {...getRootProps({ className: "dropzone disabled" })}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              flexDirection: "column",
            }}
          >
            <input {...getInputProps()} />

            <div
              style={{
                width: "100%",
                height: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px dashed #786fef",
                borderRadius: "10px",
                marginTop: "40px",
                cursor: "pointer",
              }}
            >
              Drag and drop or, Browse
            </div>
          </div>
        </CardBox>
      </Stack>

      {/* Modal for Image Cropping */}
      <Dialog
        open={openModal}
        onClose={handleModalClose}
        maxWidth="md"
        fullWidth
      >
        <Paper>
          <Box p={2.5}>
            <Typography variant="h6" mb={2}>
              Crop Image
            </Typography>
            {inputImage && (
              <Cropper
                ref={cropperRef}
                src={inputImage && URL.createObjectURL(inputImage)}
                style={{ height: 400, width: "100%" }}
                aspectRatio={1}
                guides={false}
                zoomOnWheel={true}
              />
            )}
            <DialogActions>
              <StyledButton
                variant="contained"
                color="primary"
                onClick={handleCrop}
              >
                Crop and Continue
              </StyledButton>
            </DialogActions>
          </Box>
        </Paper>
      </Dialog>
      <NdmcModal
        open={showPreviewModal}
        variant={"aesthetic"}
        handleClose={() => setPreviewModal(false)}
        modalTitle="Your Image"
      >
        {outputImage && (
          <Box
            sx={{
              marginTop: "20px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={outputImage}
              alt="Output Image"
              style={{
                borderRadius: "10px",
                width: "100%",
                height: "auto",
                maxHeight: "670px",
                objectFit: "cover",
              }}
            />
            <br />
            {loading ? (
              <CircularProgress />
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <StyledButton
                  variant="contained"
                  color="primary"
                  onClick={downloadImage}
                >
                  Download Image
                </StyledButton>
              </Box>
            )}
          </Box>
        )}
      </NdmcModal>
    </Section>
  );
};

export default ImageFrameEditor;
