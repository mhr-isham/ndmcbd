import { Grid } from "@mui/material";
import {
  LogoContainer,
  StyledHeading,
  SizedContainer,
  HeroContainer,
  StyledSlide,
  StyledSlider,
} from "../../components/styles/Home.style";
import Logo from "../../components/logo/logo";
import { Section } from "../../components/styles/Page.style";
import {
  CenterGrid,
  Description,
  FlexedResponsive,
  FullWidthBox,
  MagicButton,
  ResponsiveText,
  SectionContainer,
  SectionSubtitle,
  SectionTitle,
  SectorSection,
  SpaceBetweenGrid,
  StyledDescription,
  StyledGrid,
  StyledGridContainer,
  StyledLink,
  Styleda,
  Subtitle,
} from "../../components/styles/Elements.style";
import Splash from "../../components/ui/Splash";
import about_us from "../../assets/about_us.jpg";
import AboutInfo from "../../components/ui/AboutInfo";
import StyledCard from "../../components/ui/Card";
import Testimonial from "../../components/shared/testimonial";
import EventCard from "../../components/shared/event-card";
import sectorsData from "../../static-data/sectors-data";
import { useEffect, useState } from "react";
import Gs from "../../assets/GS.jpg";
import moderator from "../../assets/moderator.jpg";
import { useRecoilState } from "recoil";
import useEvents from "../../hooks/useEvents";
import events from "../../store/atoms/eventsAtom";
import FakeEvents from "../../components/ui/fakeEvents";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import usePageTitle from "../../hooks/usePageTitle";
import {
  AboutImageBox,
  HomeBtnContainer,
  SectionInfoContainer,
} from "./index.styles";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SectorsSection from "./sectorsSection";
// import { Helmet } from "react-helmet-async";

const Home = () => {
  usePageTitle("Home");

  const eventList = useEvents();
  const [clubEvents, setEvents] = useRecoilState(events);
  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    setSectors(sectorsData);
  }, []);

  const displayedEvents = [...clubEvents].splice(0, 10);

  return (
    <div>
      {/* <Helmet>
        <meta
          name="description"
          content="Discover the power of numbers and the thrill of problem-solving with Notre Dame Math Club! Join a vibrant community of passionate mathematicians, where learning meets fun. From intriguing puzzles to stimulating discussions, explore the limitless world of mathematics with us. Unleash your analytical prowess and join a club that adds up to endless possibilities. Get ready to multiply your knowledge and factor in the excitement – Notre Dame Math Club awaits"
        />

        <meta property="og:url" content="https://ndmc.netlify.app/nmf" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Notre Dame Math Club" />
        <meta
          property="og:description"
          content="Discover the power of numbers and the thrill of problem-solving with Notre Dame Math Club! Join a vibrant community of passionate mathematicians, where learning meets fun. From intriguing puzzles to stimulating discussions, explore the limitless world of mathematics with us. Unleash your analytical prowess and join a club that adds up to endless possibilities. Get ready to multiply your knowledge and factor in the excitement – Notre Dame Math Club awaits"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/ndmc/image/upload/v1703312758/07d21e5a109bba456eb37179f53e5d7a.png"
        />

        <meta
          name="twitter:card"
          content="Discover the power of numbers and the thrill of problem-solving with Notre Dame Math Club! Join a vibrant community of passionate mathematicians, where learning meets fun. From intriguing puzzles to stimulating discussions, explore the limitless world of mathematics with us. Unleash your analytical prowess and join a club that adds up to endless possibilities. Get ready to multiply your knowledge and factor in the excitement – Notre Dame Math Club awaits"
        />
        <meta property="twitter:domain" content="https://ndmc.netlify.app" />
        <meta property="twitter:url" content="https://ndmc.netlify.app/nmf" />
        <meta name="twitter:title" content="Notre Dame Math Club" />
        <meta
          name="twitter:description"
          content="Discover the power of numbers and the thrill of problem-solving with Notre Dame Math Club! Join a vibrant community of passionate mathematicians, where learning meets fun. From intriguing puzzles to stimulating discussions, explore the limitless world of mathematics with us. Unleash your analytical prowess and join a club that adds up to endless possibilities. Get ready to multiply your knowledge and factor in the excitement – Notre Dame Math Club awaits"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/ndmc/image/upload/v1703312758/07d21e5a109bba456eb37179f53e5d7a.png"
        />
      </Helmet> */}

      {
        <div>
          <HeroContainer id="#home">
            <StyledGridContainer
              container
              columns={{ lg: 12, xs: 12, sm: 12 }}
              layout={{ md: "row-reverse" }}
              center={"true"}
            >
              <Grid item lg={5} xs={12} md={6} data-aos="fade-up-left">
                <LogoContainer>
                  <SizedContainer>
                    <Logo />
                  </SizedContainer>
                </LogoContainer>
              </Grid>
              <Grid item lg={7} xs={12} data-aos="fade-up-right">
                <Subtitle>Explore the Beauty of Mathematics</Subtitle>
                <StyledHeading>Notre Dame Math Club</StyledHeading>
                <StyledDescription
                  align="justify"
                  variant="body2"
                  // style={{ textAlign: "justify" }}
                >
                  Welcome math-enthusiasts to the mathematical realm of NDC,
                  where perplexity meets rigour, and curious minds converge. You
                  have reached your cherished destination. We have been awaiting
                  your arrival since the day you asked 'why?'. Here in the most
                  robust and meticulous club of NDC, we inquire and wonder about
                  the intriguing whimsies of math together. You are now an
                  integral fragment of this greater inquisitive mind. We warmly
                  invite you to venture into the wilderness of math and bask in
                  its beauty. Are you ready for what it has in store for us?
                </StyledDescription>
                {/*
                <HomeBtnContainer>
                  <MagicButton
                    variant="contained"
                    icon={"arrow-right"}
                    component={Link}
                    to={"events"}
                  >
                    Events
                  </MagicButton>
                </HomeBtnContainer>
      */}
              </Grid>
            </StyledGridContainer>

            <Splash position={{ left: "-250px", top: 0 }} />
            <Splash position={{ right: "-250px", bottom: 0 }} />
          </HeroContainer>

          {/* ======================= About us Section ============================== */}
          <Section id="about">
            <StyledGridContainer
              container
              columns={{ lg: 12, xs: 12, sm: 12 }}
              gap={"2rem"}
              // center={"true"}
            >
              <Grid item lg={5} sm={12} xs={12} md={5}>
                <FlexedResponsive breakpoint={"lg"} direction="column">
                  <AboutImageBox bgsrc={about_us}></AboutImageBox>
                </FlexedResponsive>
              </Grid>
              <Grid item lg={6} sm={12} xs={12} md={7}>
                <FlexedResponsive breakpoint={"lg"}>
                  <div>
                    <SectionInfoContainer>
                      <SectionSubtitle>
                        Welcome to the World of Numbers
                      </SectionSubtitle>
                      <ResponsiveText design={{ size: "xl", weight: "bold" }}>
                        About Us
                      </ResponsiveText>
                    </SectionInfoContainer>
                    <Description align="justify">
                      Inspired by Galileo Galilei’s words, “Mathematics is the
                      language with which God has written the universe,” the
                      Notre Dame Math Club (NDMC) was established on Pi-Day,
                      14th March 2017, by Md. Rezaul Karim, a Mathematics
                      lecturer at Notre Dame College, Dhaka. Our mission is to
                      foster a dynamic community for students who are eager to
                      delve into the captivating world of mathematics. With
                      around 1200 current members and 4000 alumni, NDMC has
                      grown to become one of the leading college-level
                      mathematics clubs in Bangladesh.
                      <StyledLink to={"/about"}>.. (See More)</StyledLink>
                    </Description>
                    <CenterGrid
                      container
                      columns={{ xs: 12, md: 12 }}
                      gap={"1rem"}
                      sx={{ flexWrap: "wrap" }} // Allow wrapping if needed
                    >
                      {[
                        { title: "7/YR", subtitle: "Festivals" },
                        { title: "200+", subtitle: "Workshops" },
                        { title: "3/YR", subtitle: "Publications" },
                        { title: "10K+", subtitle: "Members & Alumni" },
                      ].map((info, index) => (
                        <Grid
                            key={index}
                            item
                            xs={12}
                            md={2.4}
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            sx={{
                              textAlign: "center",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <AboutInfo title={info.title} subtitle={info.subtitle} />
                          </Grid>

                      ))}

                      <Splash position={{ right: "0", bottom: 0 }} size=".4" />
                      <Splash position={{ left: "0", tip: 0 }} size=".4" />
                    </CenterGrid>
                  </div>
                </FlexedResponsive>
              </Grid>
            </StyledGridContainer>
            <Splash position={{ left: "-150px", bottom: 0 }} />
          </Section>

          {/* ======================= About us Section End ============================== */}

          {/* Sectors section start */}
          <Section id="sector">
            <SectionContainer>
              <SectionInfoContainer>
                <SectionSubtitle variant="lg">
                  Explore our Sectors
                </SectionSubtitle>
                <SectionTitle> Sectors</SectionTitle>
              </SectionInfoContainer>
              <FullWidthBox>
                {/* <SectorSection
                  center={"true"}
                  container
                  layout={{ default: "column", sm: "row" }}
                  columns={{ lg: 12, xs: 12, md: 12, sm: 12 }}
                >
                  {sectors.map(({ icon, description, title }, index) => (
                    <StyledGrid
                      key={index}
                      item
                      xs={12}
                      sm={4.5}
                      md={3.5}
                      lg={2.5}
                      data-aos="zoom-out"
                    >
                      <StyledCard
                        icon={icon}
                        icontype={"line"}
                        title={title}
                        shortDesc={description}
                      >
                        <pre>{description}</pre>
                      </StyledCard>
                    </StyledGrid>
                  ))}
                </SectorSection> */}
                <SectorsSection />
              </FullWidthBox>
            </SectionContainer>
          </Section>
          {/* Sectors section end */}

          {/* ======================= About us Section End ============================== */}

          {/* Be a Member Button Section */}
          <div style={{ textAlign: "center", padding: "30px 0" }}>
            <MagicButton
              variant="contained"
              size="large"
              component={Link}
              to="/membership"
              style={{ fontSize: "1.2rem", padding: "15px 40px" }}
            >
              Be A Member & Join Us
            </MagicButton>
          </div>
          {/* Be a Member Button Section End */}
          {/* Events Section start */}
          <Section id="events">
            <SectionContainer>
              <SectionInfoContainer>
                <SectionSubtitle variant="lg">
                  Discover Our Events{" "}
                </SectionSubtitle>
                <SectionTitle>Events</SectionTitle>
              </SectionInfoContainer>
              <StyledSlider
                slidesPerView={1}
                style={{ overflow: "hidden", width: "100%" }}
                spaceBetween={10}
                navigation={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  500: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  859: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },

                  1270: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
              >
                {displayedEvents.length === 0 && <FakeEvents count={3} />}
                {displayedEvents.length !== 0 &&
                  displayedEvents.map((event, index) => (
                    <StyledSlide key={event?.date}>
                      <EventCard
                        title={event?.title}
                        img={event?.cover}
                        date={event?.date}
                        link={event?.fb}
                        status={event?.status.toUpperCase()}
                      />
                    </StyledSlide>
                  ))}
              </StyledSlider>
              {/* <Splash position={{ right: "0px", bottom: 0 }} size={0.38} /> */}
              <Splash position={{ left: "0px", top: "70px" }} size={0.28} />
            </SectionContainer>
          </Section>

          {/* Events Section End */}

          {/* Testimonial Section start */}
          <Section id="testimonial" style={{ minHeight: "75vh" }}>
            <SectionContainer>
              <SectionInfoContainer>
                <SectionSubtitle variant="lg">Honored Voices</SectionSubtitle>
                <SectionTitle> Testimonials</SectionTitle>
              </SectionInfoContainer>
              <FullWidthBox>
                <SpaceBetweenGrid
                  container
                  columns={{ lg: 12, sm: 12 }}
                  rowGap={"1rem"}
                >
                  <StyledGrid item lg={5.7} sm={12} data-aos="zoom-in-up">
                    <Testimonial
                      name={"Md. Rezaul Karim"}
                      designation={"Axiom"}
                      img={moderator}
                    >
                      Our club represents the entire math department and is the
                      largest at Notre Dame College. It’s a vibrant and
                      inclusive community where students explore the branches of
                      mathematics. Join us for an exciting journey in the world
                      of mathematics!
                    </Testimonial>
                  </StyledGrid>
                  <StyledGrid item lg={5.7} sm={12} data-aos="zoom-in-up">
                    <Testimonial
                      name={"Mohammad Sakib Shahriar"}
                      designation={"Hypothesis"}
                      img={Gs}
                    >
                      Notre Dame Math Club (NDMC) is a wonderful community for
                      math enthusiasts. The club, led by the passionate Reza
                      Sir, hosts some of the largest national festivals and
                      intra-olympiads, providing opportunities to meet
                      like-minded individuals. If you love math, this club could
                      be your perfect place!
                    </Testimonial>
                  </StyledGrid>
                </SpaceBetweenGrid>
              </FullWidthBox>
            </SectionContainer>
          </Section>
          {/* Testimonial Section end */}
        </div>
      }
    </div>
  );
};

export default Home;
