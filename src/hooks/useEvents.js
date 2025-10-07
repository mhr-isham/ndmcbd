import { useEffect, useState } from "react";
import getEvents from "../services/events";
import { useRecoilState } from "recoil";
import events from "../store/atoms/eventsAtom";
import { eventLoading } from "../store/atoms/loadingAtom";

const useEvents = () => {
  const [clubEvents, setEvents] = useRecoilState(events);
  const [loading, setLoading] = useRecoilState(eventLoading);

  useEffect(() => {
    if (clubEvents.length === 0) {
      const events = getEvents();
      events
        .then((data) => {
          if (data) {
            setEvents(data);
            setLoading(false);
          } else {
            setEvents([]);
          }
        })
        .catch((e) => {
          setEvents([]);
        });
    }
  });

  return clubEvents;
};

export default useEvents;
