import React, { useState } from "react";
import { Grid, Modal, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import podcastsData from "../../static-data/podcasts.json";

const ThumbnailBox = styled(Box)(({ theme }) => ({
  position: "relative",
  cursor: "pointer",
  borderRadius: "8px",
  overflow: "hidden",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const ThumbnailImage = styled("img")({
  width: "100%",
  height: "200px",
  objectFit: "cover",
  display: "block",
});

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "900px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "8px",
};

const Podcast = () => {
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleOpen = (videoId) => {
    setSelectedVideo(videoId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Grid container spacing={3} justifyContent="center">
        {podcastsData.map((podcast) => (
          <Grid item xs={12} sm={6} md={4} key={podcast.id}>
            <ThumbnailBox onClick={() => handleOpen(podcast.videoId)}>
              <ThumbnailImage
                src={podcast.thumbnail}
                alt={podcast.title}
              />
            </ThumbnailBox>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="podcast-modal"
        aria-describedby="youtube-video-player"
      >
        <Box sx={modalStyle}>
          {selectedVideo && (
            <iframe
              width="100%"
              height="500px"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Podcast;
