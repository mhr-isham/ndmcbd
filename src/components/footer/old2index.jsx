import {
  CopyRightBox,
  CopyRightBoxContent,
  FooterContainer,
  FooterContentTitle,
  FooterIcon,
  FooterInterLink,
  FooterLayout,
  FooterLink,
  FooterLinkBox,
  FooterMetaData,
  FooterMetaText,
  FooterSocialIconBox,
  FooterSocialIconPC,
  FooterWrapper,
  ImageLogo,
  ImageLogoBox,
} from "./index.styles";
import Logo from "../../assets/footerLogo.png";
import { Grid } from "@mui/material";
import { Text } from "../styles/Elements.style";
import Icon from "../ui/Icon";
import Splash from "../ui/Splash";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLayout
          container
          rowGap={"2rem"}
          sx={{ width: "100%" }}
          columns={{ md: 12 }}
        >
          <Grid item sx={{ lineHeight: "2.6rem" }} md={4}>
            {/* <ImageLogoBox>
              <ImageLogo src={Logo} />
            </ImageLogoBox> */}
            <FooterMetaData>
              {/* <FooterMetaText design={{ size: "xs", weight: "light" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing. Lorem,
                ipsum. lorem5
              </FooterMetaText> */}
              <FooterSocialIconPC>
                <FooterIcon>
                  <Icon icontype={"fill"} icon="facebook"></Icon>
                </FooterIcon>
                <FooterIcon>
                  <Icon icontype={"fill"} icon="youtube"></Icon>
                </FooterIcon>
                <FooterIcon>
                  <Icon icontype={"fill"} icon="twitter"></Icon>
                </FooterIcon>
                <FooterIcon>
                  <Icon icontype={"fill"} icon="instagram"></Icon>
                </FooterIcon>
                <FooterIcon>
                  <Icon icontype={"fill"} icon="pinterest"></Icon>
                </FooterIcon>
              </FooterSocialIconPC>
            </FooterMetaData>
          </Grid>
          <Grid item md={6} sx={{ width: "100%" }}>
            <Grid
              container
              gap={"1rem"}
              columns={{ xs: 12, md: 12 }}
              justifyContent={"space-between"}
            >
              {/* <FooterLinkBox item sx={{ pl: 2 }} xs={6}>
                <FooterContentTitle>Resources</FooterContentTitle>
                <FooterLink>Resource 1</FooterLink>
                <FooterLink>Resource 1</FooterLink>
                <FooterLink>Resource 1</FooterLink>
              </FooterLinkBox> */}
              <FooterLinkBox item sx={{ pl: 2 }} xs={3.5}>
                <FooterContentTitle>Academic</FooterContentTitle>
                <FooterLink>Competitions</FooterLink>
                <FooterLink>Tutoring</FooterLink>
                <FooterLink>WorkShops</FooterLink>
              </FooterLinkBox>
              <FooterLinkBox item sx={{ pl: 2 }} xs={3.5}>
                <FooterContentTitle>About</FooterContentTitle>
                <FooterLink>About Us</FooterLink>
                <FooterLink>Contact Us</FooterLink>
                <FooterLink>Events</FooterLink>
              </FooterLinkBox>
              <FooterLinkBox item sx={{ pl: 2 }} xs={3.5}>
                <FooterContentTitle>Links</FooterContentTitle>
                <FooterLink>Membership</FooterLink>
                <FooterLink>Volunteer</FooterLink>
                <FooterLink>Donate</FooterLink>
              </FooterLinkBox>
            </Grid>

            <FooterSocialIconBox>
              <FooterIcon>
                <Icon icontype={"fill"} icon="facebook"></Icon>
              </FooterIcon>
              <FooterIcon>
                <Icon icontype={"fill"} icon="youtube"></Icon>
              </FooterIcon>
              <FooterIcon>
                <Icon icontype={"fill"} icon="twitter"></Icon>
              </FooterIcon>
              <FooterIcon>
                <Icon icontype={"fill"} icon="instagram"></Icon>
              </FooterIcon>
              <FooterIcon>
                <Icon icontype={"fill"} icon="pinterest"></Icon>
              </FooterIcon>
            </FooterSocialIconBox>
          </Grid>
        </FooterLayout>
      </FooterContainer>
      <CopyRightBox container columns={{ md: 12 }}>
        <Grid item xs={12} md={8}>
          <CopyRightBoxContent pcAlign="left">
            © {new Date().getFullYear()} Notre Dame Math Club. All rights
            reserved.
          </CopyRightBoxContent>
        </Grid>
        <Grid item xs={12} md={3}>
          <CopyRightBoxContent pcAlign="right">
            <FooterInterLink component={Link} to={"/developers"}>
              Developers
            </FooterInterLink>
            <FooterInterLink component={Link} to={"/developers"}>
              Terms and Conditions
            </FooterInterLink>
          </CopyRightBoxContent>
        </Grid>
      </CopyRightBox>
      <Splash position={{ left: "70px", right: 0, bottom: "-90px" }} />
    </FooterWrapper>
  );
};

export default Footer;
