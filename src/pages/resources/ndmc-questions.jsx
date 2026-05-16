import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { generateSlug, normalizeSearchText } from "../../utils/slugify";
import { Box, Typography, Grid, Modal, Collapse, TextField, InputAdornment, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import questionsData from "../../static-data/ndmc-questions.json";
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

const ExpandIcon = styled("span")(({ expanded }) => ({
  display: "inline-block",
  transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
  transition: "transform 0.3s ease",
  fontSize: "1.5rem",
}));

const SectionContent = styled(Box)(({ theme }) => ({
  padding: "1.5rem",
  backgroundColor: theme.palette.background.default,
}));

const QuestionCard = styled(Box)(({ theme }) => ({
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

const QuestionThumbnail = styled("img")({
  width: "100%",
  height: "auto",
  display: "block",
});

const QuestionTitle = styled(Typography)(({ theme }) => ({
  padding: "0.75rem",
  fontSize: "0.9rem",
  fontWeight: "500",
  textAlign: "center",
  backgroundColor: theme.palette.background.paper,
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

const NdmcQuestions = () => {
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
      const flatQuestions = questionsData.flatMap(section => section.questions);
      const question = flatQuestions.find(q => generateSlug(q.title) === itemId);
      if (question && question.pdfUrl !== selectedPdf) {
        setSelectedPdf(question.pdfUrl);
        setOpen(true);
      }
    } else if (!itemId && open) {
      setOpen(false);
      setSelectedPdf(null);
    }
  }, [searchParams]);

  const handleOpen = (question) => {
    searchParams.set("item", generateSlug(question.title));
    setSearchParams(searchParams);
    setSelectedPdf(question.pdfUrl);
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
    const combinedText = normalizeSearchText(`${item.title || ""}`);
    return keywords.every((kw) => combinedText.includes(kw));
  };

  let contentToRender;

  if (appliedSearchQuery.trim() !== "") {
    const flatQuestions = questionsData.flatMap(section => section.questions).filter(isMatch);
    
    if (flatQuestions.length === 0) {
      contentToRender = <Typography sx={{ mt: 4, textAlign: 'center' }}>No questions found.</Typography>;
    } else {
      contentToRender = (
        <Box sx={{ mt: 2 }}>
          {viewMode === "thumbnail" ? (
            <Grid container spacing={3}>
              {flatQuestions.map((question) => (
                <Grid item xs={12} sm={6} md={4} key={question.id}>
                  <QuestionCard onClick={() => handleOpen(question)}>
                    <QuestionThumbnail
                      src={question.thumbnail}
                      alt={question.title}
                    />
                    <QuestionTitle>{question.title}</QuestionTitle>
                  </QuestionCard>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box>
              {flatQuestions.map((question) => (
                <Box 
                  key={question.id}
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 2, 
                    mb: 1,
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    bgcolor: 'background.paper',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                    '&:hover': { bgcolor: 'action.hover' }
                  }}
                  onClick={() => handleOpen(question)}
                >
                  <Typography fontWeight="500">{question.title}</Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      );
    }
  } else {
    contentToRender = questionsData.map((section, index) => (
      <SectionContainer key={index}>
        <SectionHeader onClick={() => toggleSection(index)}>
          <SectionTitle variant="h5">{section.section}</SectionTitle>
          <ExpandIcon expanded={expandedSections[index] ? 1 : 0}>
            ▼
          </ExpandIcon>
        </SectionHeader>
        <Collapse in={expandedSections[index]} timeout="auto" unmountOnExit>
          <SectionContent>
            {viewMode === "thumbnail" ? (
              <Grid container spacing={3}>
                {section.questions.map((question) => (
                  <Grid item xs={12} sm={6} md={4} key={question.id}>
                    <QuestionCard onClick={() => handleOpen(question)}>
                      <QuestionThumbnail
                        src={question.thumbnail}
                        alt={question.title}
                      />
                      <QuestionTitle>{question.title}</QuestionTitle>
                    </QuestionCard>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Box>
                {section.questions.map((question) => (
                  <Box 
                    key={question.id}
                    sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      p: 2, 
                      borderBottom: '1px solid #e0e0e0',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease',
                      '&:hover': { bgcolor: 'action.hover' },
                      '&:last-child': { borderBottom: 'none' }
                    }}
                    onClick={() => handleOpen(question)}
                  >
                    <Typography fontWeight="500">{question.title}</Typography>
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
            placeholder="Search questions..."
            size="small"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value.trim() === '') {
                setAppliedSearchQuery('');
              }
            }}
            onKeyDown={(e) => { if (e.key === 'Enter') setAppliedSearchQuery(searchQuery); }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
            sx={{ flexGrow: 1, bgcolor: 'background.paper', borderRadius: 1 }}
          />
          <Button variant="contained" onClick={() => setAppliedSearchQuery(searchQuery)}>
            Search
          </Button>
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

export default NdmcQuestions;
