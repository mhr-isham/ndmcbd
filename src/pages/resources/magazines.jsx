import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { generateSlug, normalizeSearchText } from "../../utils/slugify";
import { Box, Typography, Grid, Modal, TextField, InputAdornment, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import magazinesData from "../../static-data/magazines.json";
import SearchIcon from "@mui/icons-material/Search";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// ── Styled Components ─────────────────────────────────────────────────────────

const CategoryLabel = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  fontWeight: "bold",
  color: theme.palette.primary.main,
  marginBottom: "1rem",
  paddingBottom: "0.5rem",
  borderBottom: `2px solid ${theme.palette.divider}`,
}));

const ArticleCard = styled(Box)(({ theme }) => ({
  position: "relative",
  cursor: "pointer",
  borderRadius: "12px",
  overflow: "hidden",
  border: "2px solid #ffffff",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: `0 12px 30px 0 ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.5)' : 'rgba(31, 38, 135, 0.15)'}`,
  },
  "&:hover .magazine-info::after": {
    opacity: 0,
  },
  "&:hover .magazine-info::before": {
    opacity: 1,
  },
  "&:hover .magazine-title": {
    opacity: 1,
    color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    textShadow: 'none',
  },
  "&:hover .magazine-year": {
    opacity: 0.9,
    color: theme.palette.mode === 'dark' ? '#ccc' : '#444',
    textShadow: 'none',
  }
}));

const ArticleThumbnail = styled("img")({
  width: "100%",
  height: "auto",
  display: "block",
});

const ArticleInfo = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  padding: "2.5rem 1rem 1rem", 
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  zIndex: 1,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -2,
    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
    transition: "opacity 0.3s ease",
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    opacity: 0,
    transition: "opacity 0.3s ease",
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    maskImage: 'linear-gradient(to bottom, transparent 0%, black 70%)',
    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 70%)',
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.75)',
    willChange: 'opacity',
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden',
  }
}));

const ArticleTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "0.25rem",
  color: "#fff",
  opacity: 0.8,
  textShadow: "0 2px 4px rgba(0,0,0,0.8)",
  transition: "all 0.3s ease",
}));

const PublishYearText = styled(Typography)(({ theme }) => ({
  fontSize: "0.85rem",
  fontWeight: "300",
  textAlign: "center",
  color: "#fff",
  opacity: 0.6,
  textShadow: "0 2px 4px rgba(0,0,0,0.8)",
  transition: "all 0.3s ease",
}));

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

// ── Component ─────────────────────────────────────────────────────────────────

const Magazines = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [open, setOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [viewMode, setViewMode] = useState("thumbnail");
  const [searchQuery, setSearchQuery] = useState("");
  const [appliedSearchQuery, setAppliedSearchQuery] = useState("");

  useEffect(() => {
    const itemId = searchParams.get("mag_item");
    if (itemId) {
      const flat = magazinesData.flatMap((s) => s.articles);
      const item = flat.find((a) => generateSlug(a.title) === itemId);
      if (item && item.pdfurl !== selectedPdf) {
        setSelectedPdf(item.pdfurl);
        setOpen(true);
      }
    } else if (!itemId && open) {
      setOpen(false);
      setSelectedPdf(null);
    }
  }, [searchParams]);

  const handleOpen = (article) => {
    searchParams.set("mag_item", generateSlug(article.title));
    setSearchParams(searchParams);
    setSelectedPdf(article.pdfurl);
    setOpen(true);
  };

  const handleClose = () => {
    searchParams.delete("mag_item");
    setSearchParams(searchParams);
    setOpen(false);
    setSelectedPdf(null);
  };

  const handleViewChange = (event, newView) => {
    if (newView !== null) setViewMode(newView);
  };

  const keywords = appliedSearchQuery
    .split(" ")
    .map((k) => normalizeSearchText(k))
    .filter((k) => k !== "");

  const isMatch = (item) => {
    if (keywords.length === 0) return true;
    const text = normalizeSearchText(`${item.title || ""} ${item.publishyear || ""}`);
    return keywords.every((kw) => text.includes(kw));
  };

  // Flat list when searching, grouped by section otherwise
  const allArticles = magazinesData.flatMap((s) => s.articles);
  const isSearching = appliedSearchQuery.trim() !== "";

  const renderGrid = (articles) => (
    <Grid container spacing={3}>
      {articles.map((article) => (
        <Grid item xs={12} sm={6} md={4} key={article.id}>
          <ArticleCard onClick={() => handleOpen(article)}>
            {article.imgurl && <ArticleThumbnail src={article.imgurl} alt={article.title} />}
            <ArticleInfo className="magazine-info">
              <ArticleTitle className="magazine-title">{article.title}</ArticleTitle>
              <PublishYearText className="magazine-year">{article.publishyear}</PublishYearText>
            </ArticleInfo>
          </ArticleCard>
        </Grid>
      ))}
    </Grid>
  );

  const renderList = (articles) => (
    <Box>
      {articles.map((article) => (
        <Box
          key={article.id}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            p: 2,
            mb: 1,
            border: "1px solid",
            borderColor: "divider",
            borderRadius: "8px",
            bgcolor: "background.paper",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
            "&:hover": { bgcolor: "action.hover" },
          }}
          onClick={() => handleOpen(article)}
        >
          <Typography fontWeight="bold">{article.title}</Typography>
          <Typography variant="body2" color="text.secondary" fontWeight="300">
            {article.publishyear}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  let contentToRender;

  if (isSearching) {
    const filtered = allArticles.filter(isMatch);
    if (filtered.length === 0) {
      contentToRender = (
        <Typography sx={{ mt: 4, textAlign: "center" }}>
          No magazines found.
        </Typography>
      );
    } else {
      contentToRender = (
        <Box sx={{ mt: 2 }}>
          {viewMode === "thumbnail" ? renderGrid(filtered) : renderList(filtered)}
        </Box>
      );
    }
  } else {
    contentToRender = magazinesData.map((section, index) => {
      const sectionArticles = section.articles;
      return (
        <Box key={index} sx={{ mb: 4 }}>
          <CategoryLabel>{section.section}</CategoryLabel>
          {sectionArticles.length === 0 ? (
            <Typography color="text.secondary" sx={{ py: 2 }}>
              No entries yet. Check back soon!
            </Typography>
          ) : viewMode === "thumbnail" ? (
            renderGrid(sectionArticles)
          ) : (
            renderList(sectionArticles)
          )}
        </Box>
      );
    });
  }

  return (
    <Box sx={{ marginTop: "20px" }}>
      {/* Toolbar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "stretch", sm: "center" },
          mb: 2,
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", flexGrow: 1, gap: 1, maxWidth: { xs: "100%", sm: "500px" } }}>
          <TextField
            variant="outlined"
            placeholder="Search magazines..."
            size="small"
            value={searchQuery}
            onChange={(e) => {
              const val = e.target.value;
              setSearchQuery(val);
              const trimmed = val.trim();
              if (trimmed.length >= 3) {
                setAppliedSearchQuery(trimmed);
              } else {
                setAppliedSearchQuery("");
              }
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
        </Box>
        <ToggleButtonGroup
          value={viewMode}
          exclusive
          onChange={handleViewChange}
          aria-label="view mode"
          size="small"
        >
          <ToggleButton value="thumbnail" aria-label="thumbnail view">
            <ViewModuleIcon />
          </ToggleButton>
          <ToggleButton value="list" aria-label="list view">
            <ViewListIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {contentToRender}

      {/* PDF Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="magazine-pdf-modal"
        aria-describedby="magazine-pdf-viewer"
      >
        <Box sx={modalStyle}>
          <CloseButton onClick={handleClose}>Close</CloseButton>
          {selectedPdf && (
            <iframe
              src={selectedPdf}
              width="100%"
              height="100%"
              style={{ border: "none", borderRadius: "8px" }}
              title="Magazine PDF Viewer"
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Magazines;
