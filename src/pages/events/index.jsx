import { useRecoilState, useRecoilValue } from "recoil";
import { Section } from "../../components/styles/Page.style";
import { useEffect, useState } from "react";
import axios from "axios";
import useEvents from "../../hooks/useEvents";
import { Grid } from "@mui/material";
import EventCard from "../../components/shared/event-card";
import {
  PageTitleContainer,
  SectionSubtitle,
  SectionTitle,
} from "../../components/styles/Elements.style";
import FakeEvents from "../../components/ui/fakeEvents";
import events from "../../store/atoms/eventsAtom";
import { soloRegistration } from "../../api/festRegistration";
import NdmcBreadcrumbs from "../../components/breadcrumbs";
import usePageTitle from "../../hooks/usePageTitle";

const Events = () => {
  usePageTitle("Events");
  const eventList = useEvents();

  // Get events through useEvents hook
  const [clubEvents, setEvents] = useRecoilState(events);

  return (
    <Section style={{ display: "block" }}>
      <div>
        <PageTitleContainer>
          <SectionSubtitle>Events</SectionSubtitle>
          <SectionTitle>Equations in Action</SectionTitle>
          <NdmcBreadcrumbs
            pagePath={[
              {
                name: "Events",
                active: true,
              },
            ]}
          />
        </PageTitleContainer>

        {clubEvents.length === 0 && <FakeEvents count={10} />}
        <Grid
          container
          justifyContent={"center"}
          rowGap={"1.9rem"}
          alignItems={"center"}
          gap={"1rem"}
          // columnGap={"1rem"}
        >
          {clubEvents.length !== 0 &&
            clubEvents.map((event, index) => (
              <Grid
                key={event?.date}
                item
                xs={12}
                sm={12}
                md={5.5}
                lg={3.5}
                // xl={2.5}
                data-aos="zoom-in-up"
                data-aos-offset={300}
                data-aos-easing="ease-in-sine"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <EventCard
                  title={event?.title}
                  img={event?.cover}
                  date={event?.date}
                  link={event?.fb}
                  status={event?.status.toUpperCase()}
                />
              </Grid>
            ))}
        </Grid>
      </div>
    </Section>
  );
};

export default Events;
