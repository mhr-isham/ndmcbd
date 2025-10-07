import { Grid } from "@mui/material";
import EventCard from "../shared/event-card";

const FakeEvents = ({ count }) => {
  const defaultArr = new Array(count);
  const events = [...defaultArr].splice(0, count);

  return (
    <Grid container justifyContent={"center"} gap={".9rem"} columnGap={"1rem"}>
      {events.map((event, index) => (
        <Grid
          key={index}
          item
          xs={8}
          sm={8}
          md={4.5}
          lg={3}
          xl={2.5}
          data-aos="zoom-in-up"
          data-aos-offset={300}
          data-aos-easing="ease-in-sine"
        >
          <EventCard
            title={event?.title}
            img={event?.cover}
            date={event?.date}
            link={event?.fb}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default FakeEvents;
