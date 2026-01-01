import { Box, Button } from "@mui/material";
import styled from "@emotion/styled";

export const CertificateContainer = styled(Box)(({ theme }) => ({
  marginTop: "2rem",
  padding: "2rem",
  borderRadius: "12px",
  backgroundColor: theme.palette.mode === "dark" ? "#1a1a1a" : "#f5f5f5",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
}));

export const CertificateImage = styled("img")({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  marginBottom: "2rem",
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
});

export const ShareButtonsContainer = styled(Box)({
  textAlign: "center",
  marginTop: "1.5rem",
});

export const ShareButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.75rem 1.5rem",
  borderRadius: "8px",
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: 600,
  transition: "all 0.3s ease",
  backgroundColor: theme.palette.mode === "dark" ? "#2a2a2a" : "#ffffff",
  color: theme.palette.mode === "dark" ? "#ffffff" : "#333333",
  border: `2px solid ${theme.palette.mode === "dark" ? "#3a3a3a" : "#e0e0e0"}`,
  
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    backgroundColor: theme.palette.primary.main,
    color: "#ffffff",
    borderColor: theme.palette.primary.main,
  },
}));
