import {
  Badge,
  DateBox,
  EventButtonContainer,
  EventCardContainer,
  EventContentBox,
  EventImageBox,
} from "./index.styles";
import {
  ColoredText,
  FlexedBox,
  MagicButton,
  SecondaryButton,
  SquareButton,
  StyledButton,
  Text,
} from "../../styles/Elements.style";
import Icon from "../../ui/Icon";
import Splash from "../../ui/Splash";
import { format, fromUnixTime, isBefore } from "date-fns";
import { useRecoilValue } from "recoil";
import { eventLoading } from "../../../store/atoms/loadingAtom";
import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";

const EventCard = ({ status, title, img, date, link }) => {
  const loadingEvent = useRecoilValue(eventLoading);
  

const statusGenerator = (date) => {
   const isPassed = isBefore(fromUnixTime(date), new Date());
   if (isPassed) return "Ended";

   return "Ongoing";
 };

  return (
    <EventCardContainer>
      {!loadingEvent ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <EventImageBox img={img} sx={{ cursor: "pointer" }}>
            <Badge>{statusGenerator(date)}</Badge>
          </EventImageBox>
        </a>
      ) : (
        <Skeleton variant="rounded" width={"100%"} height={250} />
      )}
      <EventContentBox>
        {loadingEvent ? (
          <div>
            <Skeleton variant="text" fontSize=".5rem" />
            <Skeleton variant="text" fontSize=".9rem" />
            <Skeleton variant="text" fontSize="5rem" />
          </div>
        ) : (
          <DateBox>
            <Icon icon={"calendar"} icontype={"line"} />
            <Text design={{ size: "xxs", weight: "light" }}>
               {format(typeof date==="number"?fromUnixTime(date):new Date(date),"dd MMMM yyyy")}
            </Text>
          </DateBox>
        )}
        <Text design={{ size: "xs", weight: "bold" }}>{title}</Text>
      </EventContentBox>
      <EventButtonContainer style={{ gap: ".4rem" }}>
        {!loadingEvent ? (
          <SecondaryButton href={link} target="_blank">
            Learn more
            <Icon icon={"arrow-right-up"} icontype={"line"} />
          </SecondaryButton>
        ) : (
          <Skeleton variant="rounded" width={90} height={40} />
        )}
        {status === "upcoming" && (
          <MagicButton variant={"contained"} component={Link} to={"/nmf"}>
            Register
          </MagicButton>
        )}
      </EventButtonContainer>

      <Splash position={{ bottom: "0", right: 0 }} size={0.18} />
      <Splash position={{ top: "0", left: 0 }} size={0.3} />
    </EventCardContainer>
  );
};

export default EventCard;
