import {
  Box,
  Grid,
  Link,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import logo from "../../assets/ndmc.png";
import {
  FooterContainer,
  FooterIconBox,
  FooterWrapper,
  FooterTitle,
  FooterLogo,
  FooterHeader,
  FooterLinks,
  FooterCopy,
  FooterIcon,
  FooterLink,
  FooterLogoImage,
} from "./index.styles";
import Icon from "../ui/Icon";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer maxWidth={false}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <FooterLogoImage></FooterLogoImage>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <FooterHeader variant="subtitle1" gutterBottom>
              About
            </FooterHeader>
            <FooterLinks>
              <Link href="#" display="block">
                About Us
              </Link>
              <Link href="#" display="block">
                Contact Us
              </Link>
              <Link href="#" display="block">
                Events
              </Link>
              <Link href="#" display="block">
                Resources
              </Link>
            </FooterLinks>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <FooterHeader variant="subtitle1" gutterBottom>
              Academics
            </FooterHeader>
            <FooterLinks>
              <Link href="#" display="block">
                Competitions
              </Link>
              <Link href="#" display="block">
                Problem Sets
              </Link>
              <Link href="#" display="block">
                Tutoring
              </Link>
              <Link href="#" display="block">
                Workshops
              </Link>
            </FooterLinks>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <FooterHeader variant="subtitle1" gutterBottom>
              Get Involved
            </FooterHeader>
            <FooterLinks>
              <Link href="#" display="block">
                Membership
              </Link>
              <Link href="#" display="block">
                Volunteer
              </Link>
              <Link href="#" display="block">
                Donate
              </Link>
            </FooterLinks>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <FooterHeader variant="subtitle1" gutterBottom>
              Connect
            </FooterHeader>
            <FooterIcon>
              <FooterLink
                href="https://www.youtube.com/@notredamemathclub"
                target="_blank"
              >
                <Icon icon={"facebook"} icontype="line" />
              </FooterLink>
              <FooterLink
                href="https://www.youtube.com/@notredamemathclub"
                target="_blank"
              >
                <Icon icon={"youtube"} icontype="line" />
              </FooterLink>
              <FooterLink
                href="https://www.youtube.com/@notredamemathclub"
                target="_blank"
              >
                <Icon icon={"instagram"} icontype="line" />
              </FooterLink>
            </FooterIcon>
            <FooterIcon>
              <FooterLink
                href="https://www.youtube.com/@notredamemathclub"
                target="_blank"
              >
                <Icon icon={"twitter"} icontype="line" />
              </FooterLink>
              <FooterLink
                href="https://www.youtube.com/@notredamemathclub"
                target="_blank"
              >
                <Icon icon={"linkedin"} icontype="line" />
              </FooterLink>
              <FooterLink
                href="https://www.youtube.com/@notredamemathclub"
                target="_blank"
              >
                <Icon icon={"telegram"} icontype="line" />
              </FooterLink>
            </FooterIcon>
          </Grid>
        </Grid>
        <Typography color="text.secondary" align="center" sx={{ pt: 2 }}>
          <FooterCopy>
            © {new Date().getFullYear()} Notre Dame Math Club. All rights
            reserved.
          </FooterCopy>
        </Typography>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
