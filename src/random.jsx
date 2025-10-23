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

      {
        <div>
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
        </div>
      }
    </div>
  );
};

export default Home;
