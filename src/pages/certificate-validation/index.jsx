import { useState } from "react";
import { Grid, Box, CircularProgress } from "@mui/material";
import {
  CenterButtonBox,
  MagicButton,
  PageTitleContainer,
  SectionSubtitle,
  SectionTitle,
  Text,
} from "../../components/styles/Elements.style";
import { Section } from "../../components/styles/Page.style";
import NdmcBreadcrumbs from "../../components/breadcrumbs";
import usePageTitle from "../../hooks/usePageTitle";
import Input from "../../components/form-input";
import {
  CertificateContainer,
  CertificateImage,
  ShareButtonsContainer,
  ShareButton,
} from "./index.styles";
import Icon from "../../components/ui/Icon";

const CertificateValidation = () => {
  usePageTitle("Certificate Validation");
  const [certificateId, setCertificateId] = useState("");
  const [loading, setLoading] = useState(false);
  const [certificateImage, setCertificateImage] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!certificateId.trim()) {
      setError("Please enter a certificate ID");
      return;
    }

    setLoading(true);
    setError("");
    setCertificateImage(null);

    try {
      const response = await fetch(`/api/certificate.php/${certificateId}`);
      
      if (response.status === 404) {
        setError("No certificate found for this ID");
        setLoading(false);
        return;
      }

      if (!response.ok) {
        setError("An error occurred while fetching the certificate");
        setLoading(false);
        return;
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setCertificateImage(imageUrl);
    } catch (err) {
      setError("Failed to fetch certificate. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleShare = (platform) => {
    const shareUrl = window.location.href;
    const shareText = `Check out my certificate from NDMC! Certificate ID: ${certificateId}`;

    let url = "";
    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      default:
        return;
    }

    window.open(url, "_blank", "width=600,height=400");
  };

  return (
    <Section style={{ display: "block" }}>
      <PageTitleContainer>
        <SectionSubtitle>Certificate</SectionSubtitle>
        <SectionTitle>Validate Certificate</SectionTitle>
        <NdmcBreadcrumbs
          pagePath={[
            {
              name: "Certificate Validation",
              active: true,
            },
          ]}
        />
      </PageTitleContainer>

      <Box sx={{ maxWidth: "900px", margin: "0 auto", mt: 4 }}>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={certificateId}
            name="certificateId"
            id="certificateId"
            label="Certificate ID"
            placeholder="Enter Certificate ID"
            onChange={(e) => setCertificateId(e.target.value)}
          />

          <CenterButtonBox>
            <MagicButton variant="contained" type="submit" disabled={loading}>
              {loading ? <CircularProgress size={24} /> : "Validate"}
            </MagicButton>
          </CenterButtonBox>
        </form>

        {error && (
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Text colored="error" design={{ size: "md", weight: "bold" }}>
              {error}
            </Text>
          </Box>
        )}

        {certificateImage && (
          <CertificateContainer>
            <CertificateImage src={certificateImage} alt="Certificate" />
            
            <ShareButtonsContainer>
              <Text design={{ size: "md", weight: "bold" }} sx={{ mb: 2 }}>
                Share on:
              </Text>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <ShareButton onClick={() => handleShare("facebook")}>
                    <Icon icon="facebook-box" icontype="fill" size={2} />
                    Facebook
                  </ShareButton>
                </Grid>
                <Grid item>
                  <ShareButton onClick={() => handleShare("twitter")}>
                    <Icon icon="twitter" icontype="fill" size={2} />
                    Twitter
                  </ShareButton>
                </Grid>
                <Grid item>
                  <ShareButton onClick={() => handleShare("linkedin")}>
                    <Icon icon="linkedin-box" icontype="fill" size={2} />
                    LinkedIn
                  </ShareButton>
                </Grid>
              </Grid>
            </ShareButtonsContainer>
          </CertificateContainer>
        )}
      </Box>
    </Section>
  );
};

export default CertificateValidation;
