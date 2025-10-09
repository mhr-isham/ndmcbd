import { Grid } from "@mui/material";
import {
  CenterGrid,
  Description,
  ResponsiveText,
  SectionSubtitle,
  Subtitle,
  Text,
} from "../../components/styles/Elements.style";
import {
  AboutStyledBanner,
  Clip,
  MissionGridLayout,
  TitleWrapper,
} from "./index.styles";
import { Section } from "../../components/styles/Page.style";
import AboutInfo from "../../components/ui/AboutInfo";
import Splash from "../../components/ui/Splash";
import usePageTitle from "../../hooks/usePageTitle";
// import { Helmet } from "react-helmet-async";
// import { MetaTags } from "react-meta-tags";
// import { Helmet } from "react-helmet";

const About = () => {
  usePageTitle("About");
  return (
    <div>
      {/* 
      <Helmet>
        <meta
          name="description"
          content="Inspired by Galileo Galilei’s words, “Mathematics is the language with which God has written the universe,” the Notre Dame Math Club (NDMC) was established on Pi-Day, 14th March 2017, by Md. Rezaul Karim, a Mathematics lecturer at Notre Dame College, Dhaka. Our mission is to foster a dynamic community for students who are eager to delve into the captivating world of mathematics"
        />

        <meta property="og:url" content="https://www.ndmc.netlify.app/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About-Notre Dame Math Club" />
        <meta
          property="og:description"
          content="Inspired by Galileo Galilei’s words, “Mathematics is the language with which God has written the universe,” the Notre Dame Math Club (NDMC) was established on Pi-Day, 14th March 2017, by Md. Rezaul Karim, a Mathematics lecturer at Notre Dame College, Dhaka. Our mission is to foster a dynamic community for students who are eager to delve into the captivating world of mathematics"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/ndmc/image/upload/v1703312758/07d21e5a109bba456eb37179f53e5d7a.png"
        />

        <meta
          name="twitter:card"
          content="Inspired by Galileo Galilei’s words, “Mathematics is the language with which God has written the universe,” the Notre Dame Math Club (NDMC) was established on Pi-Day, 14th March 2017, by Md. Rezaul Karim, a Mathematics lecturer at Notre Dame College, Dhaka. Our mission is to foster a dynamic community for students who are eager to delve into the captivating world of mathematics"
        />
        <meta property="twitter:domain" content="ndmcbd.org" />
        <meta
          property="twitter:url"
          content="https://www.ndmc.netlify.app/about"
        />
        <meta name="twitter:title" content="About-Notre Dame Math Club" />
        <meta
          name="twitter:description"
          content="Inspired by Galileo Galilei’s words, “Mathematics is the language with which God has written the universe,” the Notre Dame Math Club (NDMC) was established on Pi-Day, 14th March 2017, by Md. Rezaul Karim, a Mathematics lecturer at Notre Dame College, Dhaka. Our mission is to foster a dynamic community for students who are
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/ndmc/image/upload/v1703312758/07d21e5a109bba456eb37179f53e5d7a.png"
        />
      </Helmet> */}
      <AboutStyledBanner>
        <TitleWrapper>
          <Subtitle> </Subtitle>
          <ResponsiveText
            design={{ size: "xxl", weight: "xBold" }}
            id="title"
            style={{ textTransform: "uppercase", lineHeight: "4.5rem" }}
          >
            
          </ResponsiveText>
        </TitleWrapper>
      </AboutStyledBanner>
      <div style={{ paddingTop: "100px" }}>
        <div>
          <Text design={{ size: "lg", weight: "light" }}>Who we are...?</Text>
          <Description align="left">
            Inspired by Galileo Galilei’s words, “Mathematics is the language
            with which God has written the universe,” the Notre Dame Math Club
            (NDMC) was established on Pi-Day, 14th March 2017, by Md. Rezaul
            Karim, a Mathematics lecturer at Notre Dame College, Dhaka. Our
            mission is to foster a dynamic community for students who are eager
            to delve into the captivating world of mathematics. With around 10000 total members and alumni, NDMC has grown to become one of the
            leading college-level mathematics clubs in Bangladesh.
          </Description>
          <Description align="left">
            We are a hub for learning, collaboration, and intellectual growth,
            guided by our motto, “Mighty Math to Feel the Almighty and His
            Creation.” NDMC provides a supportive environment where students can
            engage with mathematics beyond the classroom and discover its myriad
            applications in the real world. Our activities include regular
            workshops and seminars, where we invite guest speakers, including
            mathematicians, lecturers, and experts in the field, to share their
            knowledge and wisdom with the members. We also organize weekly math
            sessions, intra-math Olympiads, annual festivals, and various other
            events throughout the year.
          </Description>
          <Description align="left">
            NDMC boasts four official Olympiad teams: ‘Team π’, ‘Team e’,
            ‘Team φ’, and ‘Team Ω’ as well as a Rubik’s cube team named ‘NDMC Pentagram’.
            These teams participate in local, national, and international
            competitions, including various competitions such as IMO, IGO, APMO,
            CERN Competitions, regional & national level Olympiads, challenges,
            and hackathons. Their commendable performance has brought an
            unrivaled reputation to the institution and earned profound respect
            in the international arena.
          </Description>

          <Description align="left">
            Recognizing that math anxiety is common among students, NDMC strives
            to foster a love for mathematics. We place a strong emphasis on
            nurturing students’ writing skills. We have three regular
            publications: ‘The Function’, our annual magazine featuring
            articles, riddles, and theorems from teachers and students; ‘The
            Plane’, an annual wall magazine displayed on the second floor of
            the Ganguly Building; and ‘The Number’, a unique, handwritten
            magazine created by our members. Six editions of ‘The Number’ have
            been published so far and are available in the college library.
            These publications offer our members a platform to share their
            insights on math-related topics.
          </Description>
          <Description align="left">
            With a range of activities and numerous achievements, the Notre Dame
            Math Club holds a special place in the hearts of all math
            enthusiasts within our college community. We welcome students of all
            math proficiency levels to join us and become part of our vibrant
            community of math lovers. Through experienced and eloquent
            moderators, NDMC aims to be at the forefront of promoting
            mathematics in every sphere of life, continuing to inspire students
            to explore the fascinating world of mathematics.
          </Description>
          <div>
            <CenterGrid container columns={{ xs: 12, md: 12 }} gap={"1rem"}>
              <Grid item xs={5} md={2.5}>
                <AboutInfo title={"7/YR"} subtitle={"Festivals"} />
              </Grid>
              <Grid item xs={5} md={2.5}>
                <AboutInfo title={"200+"} subtitle={"Workshops"} />
              </Grid>
              <Grid item xs={5} md={2.5}>
                <AboutInfo title={"3/YR"} subtitle={"Publications"} />
              </Grid>
              <Grid item xs={5} md={2.5}>
                <AboutInfo title={"10K+"} subtitle={"Members and Alumni"} />
              </Grid>

              <Splash position={{ right: "0", bottom: 0 }} size=".4" />
              <Splash position={{ left: "0", tip: 0 }} size=".4" />
            </CenterGrid>
          </div>
        </div>
      </div>
      <Section>
        <MissionGridLayout
          container
          columns={{ lg: 12 }}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Grid item textAlign={"center"} sx={{ marginBottom: 10 }}>
            <SectionSubtitle>Our Mission</SectionSubtitle>
            <ResponsiveText design={{ size: "lg" }}>
              Exploring Math's Wonders: Our Vision and Goals
            </ResponsiveText>
          </Grid>

          <Grid item>
            <MissionGridLayout
              style={{
                flexWrap: "wrap",
                gap: ".7rem",
                columnGap: "1rem",
                justifyContent: "center",
              }}
            >
              <Clip>Fostering a Dynamic Mathematical Community</Clip>
      <Clip>Promoting Mathematics in Life</Clip>
      <Clip>Welcoming All Proficiency Levels</Clip>
      <Clip>Hosting Educational Workshops</Clip>
      <Clip>Inviting Guest Speakers</Clip>
      <Clip>Organizing Weekly Math Sessions</Clip>
      <Clip>Conducting Intra-Math Olympiads</Clip>
      <Clip>Participating in International Competitions</Clip>
      <Clip>Forming Official Olympiad Teams</Clip>
      <Clip>Publishing Online Articles Every Week</Clip>
      <Clip>Displaying Wall Magazine for Mathematical Insights</Clip>
      <Clip>Creating Handwritten Magazine for Mathematical Exploration</Clip>
      <Clip>Celebrating Annual Math Festivals</Clip>
      <Clip>Organizing Various Events Throughout the Year</Clip>
      <Clip>Promote Interest in Mathematics</Clip>
      <Clip>Improve Mathematical Skills</Clip>
      <Clip>Support Academic Excellence</Clip>
      <Clip>Participation in Competitions</Clip>
      <Clip>Math Outreach and Community Service</Clip>
      <Clip>Collaboration and Networking</Clip>
      <Clip>Career and College Readiness</Clip>
      <Clip>Math Awareness and Education</Clip>
      <Clip>Mathematics in Fun and Creative Ways</Clip>
      <Clip>Inclusivity and Diversity</Clip>
      <Clip>Leadership and Personal Development</Clip>
      <Clip>Research and Projects</Clip>
      <Clip>Problem Solving and Math Challenges</Clip>
            </MissionGridLayout>
          </Grid>
        </MissionGridLayout>
      </Section>
      {/* <Section></Section> */}
    </div>
  );
};

export default About;
