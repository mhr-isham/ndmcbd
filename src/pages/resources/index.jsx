import {
  PageTitleContainer,
  SectionSubtitle,
  SectionTitle,
} from "../../components/styles/Elements.style";
import NdmcBreadcrumbs from "../../components/breadcrumbs";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Section } from "../../components/styles/Page.style";
import Podcast from "./podcast";
import Articles from "./articles";
import PYQs from "./pyqs";
import Session from "./session";
import Magazines from "./magazines";
import { useSearchParams } from "react-router-dom";

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

const tabMapping = {
  articles: 0,
  podcast: 1,
  PYQs: 2, 
  session: 3,
  magazines: 4,
};

export default function Resources() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const initialTab = tabMapping[tabParam] !== undefined ? tabMapping[tabParam] : 0;
  const [value, setValue] = React.useState(initialTab);

  React.useEffect(() => {
    const tabParam = searchParams.get("tab");
    const newTab = tabMapping[tabParam] !== undefined ? tabMapping[tabParam] : 0;
    setValue(newTab);
  }, [searchParams]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const tabName = Object.keys(tabMapping).find(key => tabMapping[key] === newValue);
    setSearchParams({ tab: tabName });
  };

  return (
    <Section style={{ display: "block", padding: "20px 0px" }}>
      <PageTitleContainer style={{ marginBottom: "30px" }}>
        <SectionSubtitle>Resources</SectionSubtitle>
        <SectionTitle>Our Content</SectionTitle>
        <NdmcBreadcrumbs
          pagePath={[
            {
              name: "Resources",
              active: true,
            },
          ]}
        />
      </PageTitleContainer>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            onChange={handleChange}
            aria-label="Resources tabs"
            sx={{
              "& .MuiTabs-flexContainer": {
                justifyContent: { sm: "center" },
              },
            }}
          >
            <Tab label="Articles" {...a11yProps(0)} />
            <Tab label="Podcast" {...a11yProps(1)} />
            <Tab label="PYQs" {...a11yProps(2)} />
            <Tab label="Sessions" {...a11yProps(3)} />
            <Tab label="Magazines" {...a11yProps(4)} />
            
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Articles />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Podcast />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <PYQs />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Session />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <Magazines />
        </CustomTabPanel>
      </Box>
    </Section>
  );
}
