import {
  CenterGrid,
  PageTitleContainer,
  SectionSubtitle,
  SectionTitle,
} from "../../components/styles/Elements.style";
import ProfileCard from "../../components/ui/ProfileCard";
import NdmcBreadcrumbs from "../../components/breadcrumbs";
import principalImage from "../../assets/principal.jpg";
import moderatorImage from "../../assets/moderator.jpg";
import foundingAxiom from "../../assets/foundingAxiom.jpg";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Section } from "../../components/styles/Page.style";
import FormerExecutives from "./former";
import CurrentExecutives from "./current";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Executives() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Section style={{ display: "block" }}>
      <PageTitleContainer>
        <SectionSubtitle>Executives</SectionSubtitle>
        <SectionTitle>Meet our Team</SectionTitle>
        <NdmcBreadcrumbs
          pagePath={[
            {
              name: "Executives",
              active: true,
            },
          ]}
        />
      </PageTitleContainer>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            centered
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Officers " {...a11yProps(0)} />
            <Tab label="Current" {...a11yProps(1)} />
            <Tab label="Former" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div style={{ marginTop: "20px" }}>
            <CenterGrid container columns={{ xs: 12, md: 12 }} gap={"1rem"}>
              <ProfileCard
                img={principalImage}
                name={"Dr. Fr. Hemanto Pius Rozario"}
                post={`Principal`}
              />
              <ProfileCard
                img={foundingAxiom}
                name={"Md. Rezaul Karim"}
                post={`Founding Axiom and Moderator`}
              />
            </CenterGrid>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <CurrentExecutives />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <FormerExecutives />
        </CustomTabPanel>
      </Box>
    </Section>
  );
/*
  return (
    <Section style={{ display: "block" }}>
      <PageTitleContainer>
        <SectionSubtitle>Executives</SectionSubtitle>
        <SectionTitle>Meet our Team</SectionTitle>
        <NdmcBreadcrumbs
          pagePath={[
            {
              name: "Executives",
              active: true,
            },
          ]}
        />
      </PageTitleContainer>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            centered
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Officers " {...a11yProps(0)} />
            <Tab label="Current" {...a11yProps(1)} />
            <Tab label="Former" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div style={{ marginTop: "20px" }}>
            <CenterGrid container columns={{ xs: 12, md: 12 }} gap={"1rem"}>
              <ProfileCard
                img={principalImage}
                name={"Dr. Fr. Hemanto Pius Rozario"}
                post={`Principal`}
              />

              <ProfileCard 
                img={moderatorImage} 
                name={"Md. Azizur Rahman"} 
                post={`Moderator`} /> 

              <ProfileCard
                img={foundingAxiom}
                name={"Md. Rezaul Karim"}
                post={`Founding Axiom and Moderator`}
              />
            </CenterGrid>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <CurrentExecutives />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <FormerExecutives />
        </CustomTabPanel>
      </Box>
    </Section>
  );
*/
}

// const Executives = () => {
//   usePageTitle("Executives");
//   return (
//     <div>
//       <PageTitleContainer>
//         <SectionSubtitle>Executives</SectionSubtitle>
//         <SectionTitle>Our Officers</SectionTitle>
//         <NdmcBreadcrumbs pagePath={[{ name: "Executives", active: true }]} />
//       </PageTitleContainer>

//       <EcContainer>
{
  /* <div>
  <CenterGrid container columns={{ xs: 12, md: 12 }} gap={"1rem"}>
    <ProfileCard
      img={principalImage}
      name={"Dr. Fr. Hemanto Pius Rozario"}
      post={`Principal`}
    />

    <ProfileCard
      img={moderatorImage}
      name={"Md. Azizur Rahman"}
      post={`Moderator`}
    />

    <ProfileCard
      img={foundingAxiom}
      name={"Md. Rezaul Karim"}
      post={`Founding Axiom`}
    />
  </CenterGrid>
</div>; */
}
//         <CenterGrid container columns={{ xs: 12, md: 12 }} gap={"1rem"}>
//           <Grid item xs={12} md={5}>
//             <StyledLink to={"/executives/former"}>
//               <EcBox>Former</EcBox>
//             </StyledLink>
//           </Grid>
//           <Grid item xs={12} md={5}>
//             <StyledLink to={"/executives/current"}>
//               <EcBox>Current</EcBox>
//             </StyledLink>
//           </Grid>
//         </CenterGrid>
//       </EcContainer>
//     </div>
//   );
// };

// export default Executives;
