import React, { useState } from "react";
import { Box, Typography, Grid, Modal, Collapse, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import articlesData from "../../static-data/articles.json";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
  height: "200px",
  objectFit: "cover",
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
  const [open, setOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});

  const handleOpen = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPdf(null);
  };

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Box sx={{ marginTop: "20px" }}>
      {articlesData.map((section, index) => (
        <SectionContainer key={index}>
          <SectionHeader onClick={() => toggleSection(index)}>
            <SectionTitle variant="h5">{section.section}</SectionTitle>
            <ExpandIcon expanded={expandedSections[index] ? 1 : 0}>
              <ExpandMoreIcon />
            </ExpandIcon>
          </SectionHeader>
          <Collapse in={expandedSections[index]} timeout="auto" unmountOnExit>
            <SectionContent>
              <Grid container spacing={3}>
                {section.articles.map((article) => (
                  <Grid item xs={12} sm={6} md={4} key={article.id}>
                    <ArticleCard onClick={() => handleOpen(article.pdfUrl)}>
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
            </SectionContent>
          </Collapse>
        </SectionContainer>
      ))}

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
