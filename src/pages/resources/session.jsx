import React, { useState, useEffect } from "react";
import { Modal, Box, Typography, TextField, InputAdornment, Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSearchParams } from "react-router-dom";
import { generateSlug, normalizeSearchText } from "../../utils/slugify";
import sessionData from "../../static-data/session.json";
import SearchIcon from "@mui/icons-material/Search";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
};

const CloseButton = styled("button")(({ theme }) => ({
  position: "absolute",
  top: "10px",
  right: "10px",
  zIndex: 1,
  background: theme.palette.error.main,
  color: "white",
  border: "none",
  borderRadius: "4px",
  padding: "8px 16px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "bold",
  "&:hover": {
    background: theme.palette.error.dark,
  },
}));

const Session = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [openVideo, setOpenVideo] = useState(false);
  const [openPdf, setOpenPdf] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [appliedSearchQuery, setAppliedSearchQuery] = useState("");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const itemId = searchParams.get("session_item");
    const type = searchParams.get("type");
    if (itemId) {
      const allSessions = sessionData.flatMap((s) => s.articles || []);
      const session = allSessions.find((s) => generateSlug(s.title) === itemId);
      if (session) {
        if (type === "recording" && session.videoId) {
          setSelectedVideo(session.videoId);
          setOpenVideo(true);
        } else if (type === "handout" && session.pdfUrl) {
          setSelectedPdf(session.pdfUrl);
          setOpenPdf(true);
        }
      }
    } else {
      setOpenVideo(false);
      setOpenPdf(false);
      setSelectedVideo(null);
      setSelectedPdf(null);
    }
  }, [searchParams]);

  const handleOpenVideo = (session) => {
    if (!session.videoId) return;
    searchParams.set("session_item", generateSlug(session.title));
    searchParams.set("type", "recording");
    setSearchParams(searchParams);
    setSelectedVideo(session.videoId);
    setOpenVideo(true);
  };

  const handleOpenPdf = (session) => {
    if (!session.pdfUrl) return;
    searchParams.set("session_item", generateSlug(session.title));
    searchParams.set("type", "handout");
    setSearchParams(searchParams);
    setSelectedPdf(session.pdfUrl);
    setOpenPdf(true);
  };

  const handleClose = () => {
    searchParams.delete("session_item");
    searchParams.delete("type");
    setSearchParams(searchParams);
    setOpenVideo(false);
    setOpenPdf(false);
    setSelectedVideo(null);
    setSelectedPdf(null);
  };

  const keywords = appliedSearchQuery
    .split(" ")
    .map((k) => normalizeSearchText(k))
    .filter((k) => k !== "");

  const allSessions = sessionData.flatMap((s) => s.articles || []);
  const filteredSessions = allSessions.filter((session) => {
    if (keywords.length === 0) return true;
    const text = normalizeSearchText(`${session.title || ""} ${session.author || ""} ${session.date || ""}`);
    return keywords.every((kw) => text.includes(kw));
  });

  return (
    <div style={{ marginTop: "20px", fontFamily: "'Outfit', system-ui, sans-serif" }}>
      {/* Search Bar - Carbon Copy from Podcast */}
      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: "flex", gap: 1, width: "100%", maxWidth: { xs: "100%", sm: "500px" } }}>
          <TextField
            variant="outlined"
            placeholder="Search sessions..."
            size="small"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value.trim() === "") setAppliedSearchQuery("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") setAppliedSearchQuery(searchQuery);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
            sx={{ flexGrow: 1, bgcolor: "background.paper", borderRadius: 1 }}
          />
          <Button variant="contained" onClick={() => setAppliedSearchQuery(searchQuery)}>
            Search
          </Button>
        </Box>
      </Box>

      {/* Sessions List - Carbon Copy from Podcast Structure */}
      {filteredSessions.map((session) => (
        <div
          key={session.id}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "center" : "center",
            marginBottom: "20px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            transition: "background-color 0.3s ease",
            overflow: isMobile ? "hidden" : "visible",
            backgroundColor: hoveredId === session.id ? "#f5f5f5" : "transparent",
          }}
          onMouseEnter={() => setHoveredId(session.id)}
          onMouseLeave={() => setHoveredId(null)}
          onTouchStart={() => setHoveredId(session.id)}
          onTouchEnd={() => setHoveredId(null)}
          onTouchCancel={() => setHoveredId(null)}
        >
          <img
            src={session.thumbnail}
            alt={session.title}
            style={{
              width: isMobile ? "100%" : "clamp(180px, 30vw, 280px)",
              height: isMobile ? "auto" : "calc(clamp(180px, 30vw, 280px) * 9 / 16)",
              objectFit: "cover",
              marginRight: isMobile ? 0 : "20px",
              marginBottom: isMobile ? "10px" : 0,
              borderRadius: "4px",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", textAlign: isMobile ? "center" : "left", overflow: isMobile ? "hidden" : "visible", flexGrow: 1 }}>
            <h3 style={{ margin: 0, fontSize: "clamp(18px, 4vw, 20px)", fontWeight: "normal", color: hoveredId === session.id ? "black" : "inherit", ...(isMobile ? { display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", width: "100%" } : {}) }}>
              {session.title}
            </h3>
            {session.author && (
              <p style={{ margin: "5px 0", fontSize: "clamp(14px, 3vw, 16px)", color: "#888", ...(isMobile ? { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", width: "100%" } : {}) }}>
                Speaker: {session.author}
              </p>
            )}
            {session.date && (
              <p style={{ margin: "5px 0", fontSize: "clamp(14px, 3vw, 16px)", color: "#888", ...(isMobile ? { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", width: "100%" } : {}) }}>
                Date: {session.date}
              </p>
            )}

            {/* Buttons - Custom for Session but inside Podcast structure */}
            <Stack direction="row" spacing={2} sx={{ mt: 1, justifyContent: isMobile ? "center" : "flex-start" }}>
              <Button
                variant="contained"
                onClick={() => handleOpenPdf(session)}
                sx={{
                  bgcolor: session.pdfUrl ? "#fb8c00" : "gray",
                  "&:hover": { bgcolor: session.pdfUrl ? "#ef6c00" : "gray" },
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: "8px",
                  fontSize: "clamp(12px, 2.5vw, 14px)",
                  px: { xs: 1.5, sm: 3 },
                }}
              >
                {session.pdfUrl ? "Handouts" : "Handouts Unavailable"}
              </Button>

              <Button
                variant="contained"
                onClick={() => handleOpenVideo(session)}
                sx={{
                  bgcolor: session.videoId ? "#d32f2f" : "gray",
                  "&:hover": { bgcolor: session.videoId ? "#b71c1c" : "gray" },
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: "8px",
                  fontSize: "clamp(12px, 2.5vw, 14px)",
                  px: { xs: 1.5, sm: 3 },
                }}
              >
                {session.videoId ? "Recording" : "Recording Unavailable"}
              </Button>
            </Stack>
          </div>
        </div>
      ))}

      {/* YouTube Modal - Podcast Format */}
      <Modal
        open={openVideo}
        onClose={handleClose}
        aria-labelledby="video-modal"
        aria-describedby="youtube-video-player"
      >
        <Box sx={{ ...modalStyle, height: "auto", maxWidth: "900px", p: 1 }}>
          <CloseButton onClick={handleClose}>Close</CloseButton>
          {selectedVideo && (
            <iframe
              width="100%"
              height={isMobile ? "250px" : "500px"}
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "8px" }}
            ></iframe>
          )}
        </Box>
      </Modal>

      {/* PDF Modal - Articles Format */}
      <Modal
        open={openPdf}
        onClose={handleClose}
        aria-labelledby="pdf-modal"
        aria-describedby="pdf-viewer"
      >
        <Box sx={modalStyle}>
          <CloseButton onClick={handleClose}>Close</CloseButton>
          {selectedPdf && (
            <iframe
              src={selectedPdf}
              width="100%"
              height="100%"
              style={{ border: "none", borderRadius: "8px" }}
              title="PDF Viewer"
            />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Session;
