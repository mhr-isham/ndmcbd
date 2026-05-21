import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { generateSlug, normalizeSearchText } from "../../utils/slugify";
import { Box, Typography, Grid, Modal, Collapse, IconButton, TextField, InputAdornment, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import articlesData from "../../static-data/articles.json";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import SearchIcon from "@mui/icons-material/Search";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const SectionContainer = styled(Box)(({ theme }) => ({
  marginBottom: "1.5rem",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "8px",
  overflow: "hidden",
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 1.5rem",
  cursor: "pointer",
  backgroundColor: theme.palette.background.paper,
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: theme.palette.primary.main,
}));

const ExpandIcon = styled(IconButton)(({ theme, expanded }) => ({
  transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
  transition: "transform 0.3s ease",
}));

const SectionContent = styled(Box)(({ theme }) => ({
  padding: "1.5rem",
  backgroundColor: theme.palette.background.default,
}));

const ArticleCard = styled(Box)(({ theme }) => ({
  position: "relative",
  cursor: "pointer",
  borderRadius: "8px",
  overflow: "hidden",
  border: `2px solid ${theme.palette.divider}`,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[8],
  },
}));

const ArticleThumbnail = styled("img")({
  width: "100%",
  height: "auto",
  display: "block",
});

const ArticleInfo = styled(Box)(({ theme }) => ({
  padding: "0.75rem",
  backgroundColor: theme.palette.background.paper,
}));

const ArticleTitle = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  fontWeight: "500",
  textAlign: "center",
  marginBottom: "0.25rem",
}));

const ArticleAuthor = styled(Typography)(({ theme }) => ({
  fontSize: "0.75rem",
  fontWeight: "300",
  textAlign: "center",
  color: theme.palette.text.secondary,
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

const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [open, setOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [viewMode, setViewMode] = useState("thumbnail");
  const [searchQuery, setSearchQuery] = useState("");
  const [appliedSearchQuery, setAppliedSearchQuery] = useState("");

  useEffect(() => {
    const itemId = searchParams.get("item");
    if (itemId) {
      const flatArticles = articlesData.flatMap(section => section.articles);
      const article = flatArticles.find(a => generateSlug(a.title) === itemId);
      if (article && article.pdfUrl !== selectedPdf) {
        setSelectedPdf(article.pdfUrl);
        setOpen(true);
      }
    } else if (!itemId && open) {
      setOpen(false);
      setSelectedPdf(null);
    }
  }, [searchParams]);

  const handleOpen = (article) => {
    searchParams.set("item", generateSlug(article.title));
    setSearchParams(searchParams);
    setSelectedPdf(article.pdfUrl);
    setOpen(true);
  };

  const handleClose = () => {
    searchParams.delete("item");
    setSearchParams(searchParams);
    setOpen(false);
    setSelectedPdf(null);
  };

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleViewChange = (event, newView) => {
    if (newView !== null) {
      setViewMode(newView);
    }
  };

  const keywords = appliedSearchQuery
    .split(" ")
    .map((k) => normalizeSearchText(k))
    .filter((k) => k !== "");

  const isMatch = (item) => {
    if (keywords.length === 0) return true;
    const combinedText = normalizeSearchText(`${item.title || ""} ${item.author || ""}`);
    return keywords.every((kw) => combinedText.includes(kw));
  };

  let contentToRender;

  if (appliedSearchQuery.trim() !== "") {
    const flatArticles = articlesData.flatMap(section => section.articles).filter(isMatch);
    
    if (flatArticles.length === 0) {
      contentToRender = <Typography sx={{ mt: 4, textAlign: 'center' }}>No articles found.</Typography>;
    } else {
      contentToRender = (
        <Box sx={{ mt: 2 }}>
          {viewMode === "thumbnail" ? (
            <Grid container spacing={3}>
              {flatArticles.map((article) => (
                <Grid item xs={12} sm={6} md={4} key={article.id}>
                  <ArticleCard onClick={() => handleOpen(article)}>
                    <ArticleThumbnail
                      src={article.thumbnail}
                      alt={article.title}
                    />
                    <ArticleInfo>
                      <ArticleTitle>{article.title}</ArticleTitle>
                      <ArticleAuthor>{article.author}</ArticleAuthor>
                    </ArticleInfo>
                  </ArticleCard>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box>
              {flatArticles.map((article) => (
                <Box 
                  key={article.id}
                  sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    p: 2, 
                    mb: 1,
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    bgcolor: 'background.paper',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                    '&:hover': { bgcolor: 'action.hover' }
                  }}
                  onClick={() => handleOpen(article)}
                >
                  <Typography fontWeight="500">{article.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{article.author}</Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      );
    }
  } else {
    contentToRender = articlesData.map((section, index) => (
      <SectionContainer key={index}>
        <SectionHeader onClick={() => toggleSection(index)}>
          <SectionTitle variant="h5">{section.section}</SectionTitle>
          <ExpandIcon expanded={expandedSections[index] ? 1 : 0}>
            <ExpandMoreIcon />
          </ExpandIcon>
        </SectionHeader>
        <Collapse in={expandedSections[index]} timeout="auto" unmountOnExit>
          <SectionContent>
            {viewMode === "thumbnail" ? (
              <Grid container spacing={3}>
                {section.articles.map((article) => (
                  <Grid item xs={12} sm={6} md={4} key={article.id}>
                    <ArticleCard onClick={() => handleOpen(article)}>
                      <ArticleThumbnail
                        src={article.thumbnail}
                        alt={article.title}
                      />
                      <ArticleInfo>
                        <ArticleTitle>{article.title}</ArticleTitle>
                        <ArticleAuthor>{article.author}</ArticleAuthor>
                      </ArticleInfo>
                    </ArticleCard>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Box>
                {section.articles.map((article) => (
                  <Box 
                    key={article.id}
                    sx={{ 
                      display: 'flex', 
                      flexDirection: { xs: 'column', sm: 'row' },
                      justifyContent: 'space-between',
                      alignItems: { xs: 'flex-start', sm: 'center' },
                      p: 2, 
                      borderBottom: '1px solid #e0e0e0',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease',
                      '&:hover': { bgcolor: 'action.hover' },
                      '&:last-child': { borderBottom: 'none' }
                    }}
                    onClick={() => handleOpen(article)}
                  >
                    <Typography fontWeight="500">{article.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{article.author}</Typography>
                  </Box>
                ))}
              </Box>
            )}
          </SectionContent>
        </Collapse>
      </SectionContainer>
    ));
  }

  return (
    <Box sx={{ marginTop: "20px" }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'stretch', sm: 'center' }, mb: 2, gap: 2 }}>
        <Box sx={{ display: 'flex', flexGrow: 1, gap: 1, maxWidth: { xs: '100%', sm: '500px' } }}>
          <TextField
            variant="outlined"
            placeholder="Search articles..."
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
            sx={{ flexGrow: 1, bgcolor: 'background.paper', borderRadius: 1 }}
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="pdf-viewer-modal"
        aria-describedby="pdf-document-viewer"
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
    </Box>
  );
};

export default Articles;
