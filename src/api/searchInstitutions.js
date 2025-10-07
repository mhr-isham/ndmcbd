import axios from "axios";
import { url } from "../services/url";

export const SearchInstitution = async (word) => {
  const apiUrl = url;
  const searched = await axios.post(`${apiUrl}/search/institution`, {
    title: word,
  });

  return searched;
};
