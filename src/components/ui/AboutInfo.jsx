import { Grid } from "@mui/material";
import { ResponsiveText, Text } from "../styles/Elements.style";
import { SquareBox } from "../styles/Home.style";

const AboutInfo = ({ title, subtitle }) => {
  return (
    // <Grid item xs={5} md={2.5}>
    <SquareBox>
      <ResponsiveText design={{ size: "md", weight: "xBold" }}>
        {title}
      </ResponsiveText>
      <ResponsiveText design={{ size: "xsm", weight: "light" }}>
        {subtitle}
      </ResponsiveText>
    </SquareBox>
    // </Grid>
  );
};

export default AboutInfo;
