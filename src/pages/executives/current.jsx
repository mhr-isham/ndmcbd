import ProfileCard from "../../components/ui/ProfileCard";
import executives from "../../static-data/currentExecutives.json";
import { Grid } from "@mui/material";
import { CenterGrid, Text } from "../../components/styles/Elements.style";
import { SessionBox } from "./Executives.styles";
import Splash from "../../components/ui/Splash";
import usePageTitle from "../../hooks/usePageTitle";
import { useEffect, useState } from "react";
const CurrentExecutives = () => {
  usePageTitle("Current Executives");
  const [count, setCount] = useState(4);
  useEffect(() => {
    const onScroll = () => {
      if (
        Math.round(window.scrollY + window.innerHeight) >=
        document.body.scrollHeight - 600
      ) {
        setCount(count + 4);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [count]);
  return (
    <div container gap={"1rem"}>
      <SessionBox>
        <Text design={{ size: "lsm", weight: "xBold" }}>2024-2025</Text>
        <Splash position={{ left: 0, top: 0 }} size={0.3} />
      </SessionBox>
      <CenterGrid container gap={"1rem"}>
        {executives.executives.slice(0, count).map((data, ind) => (
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
  );
};

export default CurrentExecutives;
