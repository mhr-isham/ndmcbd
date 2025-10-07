/*
import axios from "axios";
import { url } from "./url";

const getEvents = async (count) => {
  const events = await axios.post(`${url}/event/list`);

  // const events = await axios.get(`https://web.ndmc.repl.co/events.php`);
  return await events.data.events;
};

export default getEvents;
*/

/*
import axios from 'axios';
import eventsStatic from '../static-data/events.json';
const getEvents = async () => { 
  if (!import.meta.env.VITE_URL) { 
    return eventsStatic.map(e => ({ title: e.event_title, date: e.event_date, cover: e.event_cover, fb: e.event_link, status: 'past' })); 
  }
  const { data } = await axios.post(`${import.meta.env.VITE_URL}/event/list`); 
return data.events; }; 
export default getEvents;

*/

import axios from "axios";
import eventsStatic from "../static-data/events.json";
const norm = e => ({
  title: e.event_title,
  date: Math.floor(new Date(e.event_date).getTime() / 1000),
  cover: e.event_cover,
  fb: e.event_link,
  status: "PAST"
});

export default async function getEvents() {
  try {
    if (!import.meta.env.VITE_URL) return eventsStatic.map(norm);
    const { data } = await axios.post(`${import.meta.env.VITE_URL}/event/list`);
    return data.events;
  } catch {
    return eventsStatic.map(norm);
  }
}
