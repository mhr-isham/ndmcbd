import React, { useState, useEffect } from "react";
import { Modal, Box } from "@mui/material";
import podcastsData from "../../static-data/podcasts.json";

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
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleOpen = (videoId) => {
    setSelectedVideo(videoId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div style={{ marginTop: "20px", fontFamily: "'Outfit', system-ui, sans-serif" }}>
      {podcastsData.map((podcast) => (
        <div
          key={podcast.id}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "center" : "center",
            marginBottom: "20px",
            cursor: "pointer",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            transition: "background-color 0.3s ease",
            overflow: isMobile ? "hidden" : "visible",
            backgroundColor: hoveredId === podcast.id ? "#f5f5f5" : "transparent",
          }}
          onClick={() => handleOpen(podcast.videoId)}
          onMouseEnter={() => setHoveredId(podcast.id)}
          onMouseLeave={() => setHoveredId(null)}
          onTouchStart={() => setHoveredId(podcast.id)}
          onTouchEnd={() => setHoveredId(null)}
          onTouchCancel={() => setHoveredId(null)}
        >
          <img
            src={podcast.thumbnail}
            alt={podcast.title}
            style={{
              width: isMobile ? "100%" : "clamp(180px, 30vw, 280px)",
              height: isMobile ? "auto" : "calc(clamp(180px, 30vw, 280px) * 9 / 16)",
              objectFit: "cover",
              marginRight: isMobile ? 0 : "20px",
              marginBottom: isMobile ? "10px" : 0,
              borderRadius: "4px",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", textAlign: isMobile ? "center" : "left", overflow: isMobile ? "hidden" : "visible" }}>
            <h3 style={{ margin: 0, fontSize: "clamp(18px, 4vw, 20px)", fontWeight: "normal", color: hoveredId === podcast.id ? "black" : "inherit", ...(isMobile ? { display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", width: "100%" } : {}) }}>
              {podcast.title}
            </h3>
            {podcast.guest && (
              <p style={{ margin: "5px 0", fontSize: "clamp(14px, 3vw, 16px)", color: "#888", ...(isMobile ? { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", width: "100%" } : {}) }}>
                Guests: {podcast.guest}
              </p>
            )}
            {podcast.host && (
              <p style={{ margin: "5px 0", fontSize: "clamp(14px, 3vw, 16px)", color: "#888", ...(isMobile ? { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", width: "100%" } : {}) }}>
                Hosts: {podcast.host}
              </p>
            )}
          </div>
        </div>
      ))}

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
