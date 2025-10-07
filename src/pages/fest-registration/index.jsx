import { Grid } from "@mui/material";
import {
  MagicButton,
  PageTitleContainer,
  SectionSubtitle,
  SectionTitle,
  Text,
} from "../../components/styles/Elements.style";
import { Section } from "../../components/styles/Page.style";
import {
  CardBox,
  FestButtonBox,
  FestCardBox,
  FestImageBox,
  FlexButtonBox,
  RegistrationContainer,
} from "./index.styles";
import Splash from "../../components/ui/Splash";
import usePageTitle from "../../hooks/usePageTitle";
import NdmcBreadcrumbs from "../../components/breadcrumbs";
import { useRecoilState, useRecoilValue } from "recoil";
import { festStatus } from "../../store/atoms/festdata";
import CleanButton from "../../components/ui/clean-button";
import { Link, useNavigate } from "react-router-dom";
import { caUser } from "../../store/atoms/profile";
import { caProfile } from "../../store/atoms/caProfile";
import { GoogleLogin } from "../../firebase/firebase";
import caLogin from "../../api/caLogin";
import { enqueueSnackbar } from "notistack";
import { CheckFestStatus } from "../../api/festRegistration";
import { useEffect, useState } from "react";
import { FestTitle } from "../type-registration/index.styles";
import { Helmet } from "react-helmet-async";

const FEST_DATA = {
  title: "4th NDC National Math Festival",
  description:
    "Are you ready to experience the thrill of mathematics? Whether you’re a seasoned mathematician or a newbie, there’s something for everyone. Participate in events like Math Quiz, IQ Test, and Math Olympiad, and compete with math enthusiasts nationwide. The festival features guest lectures, workshops, and interactive exhibits that will leave you in awe. Can’t attend in person? We’ve got online segments for you. Join us for an unforgettable experience that will leave you with a newfound appreciation for the beauty of mathematics! ",
  // image:
  //   "https://res.cloudinary.com/ndmc/image/upload/v1704979305/events/page-banner_uqrwlf.png",
  image:
    "https://res.cloudinary.com/ndmc/image/upload/f_auto,q_auto/page-banner_1_aaubyz?fbclid=IwAR1Ww470txA9YXrb8V_ZuYtM-OOAeqvucgMtjrMDjfgwpv4nQtiSDOEFhh8",
  fbLink: "https://www.facebook.com/",
};

const FestRegistration = () => {
  usePageTitle("4th NMF Registration");
  const navigate = useNavigate();
  const [currFestStatus, setFestStatus] = useState({});
  const checkStatus = async () => {
    const festStatus = await CheckFestStatus();
    if (festStatus.data.solo !== "open") navigate("/nmf");
    setFestStatus(festStatus.data);
  };

  useEffect(() => {
    checkStatus();
  }, []);
  const isLoggedIn = useRecoilValue(caUser);
  const [caProfileInfo, setProfileInfo] = useRecoilState(caProfile);

  // Check fest status

  const handleGoogleSignIn = async () => {
    const { user } = await GoogleLogin();
    if (user.reloadUserInfo.localId) {
      const token = user.auth.currentUser.accessToken;
      const userData = await caLogin(token);
      if (userData.data.status === 0) {
        enqueueSnackbar(userData.data.message, { variant: "error" });
      } else {
        sessionStorage.setItem(
          "caUser",
          JSON.stringify({
            ...caProfileInfo,
            ...userData.data.data,
            isCa: true,
          })
        );
        setProfileInfo((prev) => ({
          ...prev,
          ...userData.data.data,
          isCa: true,
        }));
        navigate("/dashboard");
      }
    }
  };

  return (
    <Section style={{ display: "block", minHeight: "62vh" }}>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Are you ready to experience the thrill of mathematics? Whether you’re a seasoned mathematician or a newbie, there’s something for everyone. Participate in events like Math Quiz, IQ Test, and Math Olympiad, and compete with math enthusiasts nationwide. The festival features guest lectures, workshops, and interactive exhibits that will leave you in awe. Can’t attend in person? We’ve got online segments for you. Join us for an unforgettable experience that will leave you with a newfound appreciation for the beauty of mathematics!"
        />

        <meta property="og:url" content="https://ndmc.netlify.app/nmf" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="4th NDC National Math Festival" />
        <meta
          property="og:description"
          content="Are you ready to experience the thrill of mathematics? Whether you’re a seasoned mathematician or a newbie, there’s something for everyone. Participate in events like Math Quiz, IQ Test, and Math Olympiad, and compete with math enthusiasts nationwide. The festival features guest lectures, workshops, and interactive exhibits that will leave you in awe. Can’t attend in person? We’ve got online segments for you. Join us for an unforgettable experience that will leave you with a newfound appreciation for the beauty of mathematics!"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/ndmc/image/upload/v1704979305/events/page-banner_uqrwlf.png"
        />

        <meta property="fb:app_id" content="852938275631874" />
        <meta
          name="twitter:card"
          content="Are you ready to experience the thrill of mathematics? Whether you’re a seasoned mathematician or a newbie, there’s something for everyone. Participate in events like Math Quiz, IQ Test, and Math Olympiad, and compete with math enthusiasts nationwide. The festival features guest lectures, workshops, and interactive exhibits that will leave you in awe. Can’t attend in person? We’ve got online segments for you. Join us for an unforgettable experience that will leave you with a newfound appreciation for the beauty of mathematics!"
        />
        <meta property="twitter:domain" content="ndmcbd.org" />
        <meta property="twitter:url" content="https://ndmc.netlify.app/nmf" />
        <meta name="twitter:title" content="Notre Dame Math Club" />
        <meta
          name="twitter:description"
          content="Are you ready to experience the thrill of mathematics? Whether you’re a seasoned mathematician or a newbie, there’s something for everyone. Participate in events like Math Quiz, IQ Test, and Math Olympiad, and compete with math enthusiasts nationwide. The festival features guest lectures, workshops, and interactive exhibits that will leave you in awe. Can’t attend in person? We’ve got online segments for you. Join us for an unforgettable experience that will leave you with a newfound appreciation for the beauty of mathematics!"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/ndmc/image/upload/v1704979305/events/page-banner_uqrwlf.png"
        />
      </Helmet>
      <PageTitleContainer>
        <SectionSubtitle>4th NDC National Math Festival</SectionSubtitle>
        <SectionTitle>Register Now</SectionTitle>
        <NdmcBreadcrumbs
          pagePath={[
            {
              name: "4th NMF",
              active: true,
            },
          ]}
        />
      </PageTitleContainer>

      <RegistrationContainer>
        <CardBox>
          <FestCardBox container columns={{ lg: 12, md: 12, xs: 12, sm: 12 }}>
            <Grid item lg={5} md={12} xs={12}>
              <img
                src={FEST_DATA.image}
                width={"100%"}
                height={"100%"}
                style={{ borderRadius: "10px" }}
              />
            </Grid>
            <Grid
              item
              lg={6}
              md={12}
              xs={12}
              style={{
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FestTitle
                design={{ size: "md", weight: "bold" }}
                sx={{ mb: 2 }}
                style={{ textAlign: "center" }}
              >
                {FEST_DATA.title}
              </FestTitle>
              <Text design={{ size: "xs" }} style={{ textAlign: "justify" }}>
                {FEST_DATA.description}
              </Text>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30px",
                }}
              >
                <FestButtonBox>
                  {currFestStatus.solo === "open" && (
                    <MagicButton
                      component={Link}
                      to={"register"}
                      variant={"contained"}
                      style={{ textAlign: "center", width: "100%" }}
                    >
                      Event Registration
                    </MagicButton>
                  )}

                  {!caProfileInfo.isCa && currFestStatus.ca === "open" && (
                    <MagicButton
                      component={Link}
                      to={"ca"}
                      variant={"contained"}
                      style={{ textAlign: "center", width: "100%" }}
                    >
                      CA Registration
                    </MagicButton>
                  )}
                  {currFestStatus.th === "open" && (
                    <MagicButton
                      component={Link}
                      to={"treasure"}
                      variant={"contained"}
                      style={{ textAlign: "center", width: "100%" }}
                    >
                      Treasure Hunt
                    </MagicButton>
                  )}
                  {!caProfileInfo.isCa && currFestStatus.ca === "open" && (
                    <MagicButton
                      onClick={handleGoogleSignIn}
                      variant={"contained"}
                      style={{ textAlign: "center", width: "100%" }}
                    >
                      CA Login
                    </MagicButton>
                  )}
                </FestButtonBox>
              </div>
            </Grid>
          </FestCardBox>
          <Splash position={{ right: 0, bottom: 0 }} size={0.28} />
          <Splash position={{ left: 0, top: 0 }} size={0.28} />
        </CardBox>
      </RegistrationContainer>

      {/* <Splash minWidth={"50px"} position={{ left: -150, bottom: -100 }} /> */}
      {/* <Splash /> */}
    </Section>
  );
};

export default FestRegistration;
