import ProfileCard from "../../components/ui/ProfileCard";
import executives from "../../static-data/formerExecutives.json";
import { Grid } from "@mui/material";
import { CenterGrid, Text } from "../../components/styles/Elements.style";
import { SessionBox } from "./Executives.styles";
import Splash from "../../components/ui/Splash";
import usePageTitle from "../../hooks/usePageTitle";
import { useEffect, useState } from "react";

const FormerExecutives = () => {
  usePageTitle("Former Executives");

  return (
    <div>
      {executives.map((executiveObject, index) => (
        <div container gap={"1rem"} key={index}>
          <SessionBox>
            <Text design={{ size: "lsm", weight: "xBold" }}>{`${
              executiveObject.session
            }-${parseInt(executiveObject.session) + 1}`}</Text>
            <Splash position={{ left: 0, top: 0 }} size={0.3} />
          </SessionBox>
          <CenterGrid container gap={"1rem"}>
            {executiveObject.executives.map((data, ind) => (
              <Grid item key={ind}>
                <ProfileCard
                  img={data.imgUrl}
                  name={data.name}
                  post={
                    data.department
                      ? `${data.post}, Dept. of ${data.department}`
                      : `${data.post}`
                  }
                  fb={data.facebook}
                />
              </Grid>
            ))}
          </CenterGrid>
        </div>
      ))}
    </div>
  );
};

export default FormerExecutives;
