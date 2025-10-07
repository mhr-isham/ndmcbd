import { Section } from "../../components/styles/Page.style";
import notFoundImage from "../../assets/404.png";
import { NotFoundImageBox } from "./index.styles";
import { MagicButton } from "../../components/styles/Elements.style";
import Splash from "../../components/ui/Splash";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Section style={{ display: "block" }}>
      <div style={{ position: "relative", textAlign: "center" }}>
        <NotFoundImageBox>
          <img style={{ width: "100%" }} src={notFoundImage} />
        </NotFoundImageBox>
        <Splash position={{ left: 0, top: 0 }} size={0.4} />
        <Splash position={{ right: 0, bottom: 0 }} size={0.4} />
        <MagicButton variant={"contained"} to={"/"} component={Link}>
          Back to Home
        </MagicButton>
      </div>
    </Section>
  );
};

export default NotFound;
