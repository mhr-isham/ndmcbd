import Splash from "../ui/Splash";
import {
  CopyRightBox,
  CopyRightBoxContent,
  FooterButton,
  FooterDesign,
  StyledFooterLink,
} from "./index.styles";
import CleanButton from "../ui/clean-button/index";
import { Grid, Link } from "@mui/material";
import { MagicButton } from "../styles/Elements.style";
import { Link as RouterLink } from "react-router-dom";
import Icon from "../ui/Icon";
import SubscribeNewsLetter from "../../api/newsletter";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import { HashLink } from "react-router-hash-link";
const Footer = () => {
  const [state, setState] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setState(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state) {
      const response = await SubscribeNewsLetter(state);
      if (response.data.status === 1) {
        enqueueSnackbar(response.data.message, { variant: "success" });
        setState("");
      } else {
        enqueueSnackbar("Something went wrong", { variant: "error" });
      }
    }
  };

  return (
    <FooterDesign>
      <section className="footer">
        <div className="footer-row">
          <div className="footer-col">
            <h4>About</h4>
            <ul className="links">
              <li>
                <StyledFooterLink component={HashLink} to={"/#"}>
                  Home
                </StyledFooterLink>
              </li>
              <li>
                <StyledFooterLink component={RouterLink} to={"/about"}>
                  About Us
                </StyledFooterLink>
              </li>
              <li>
                <StyledFooterLink component={RouterLink} to={"/membership"}>
                  Membership
                </StyledFooterLink>
              </li>
              <li>
                <StyledFooterLink component={RouterLink} to={"/executives"}>
                  Executives
                </StyledFooterLink>
              </li>

            </ul>
          </div>

          <div className="footer-col">
            <h4>Events</h4>
            <ul className="links">
              <li>
                <StyledFooterLink component={RouterLink} to={"/about"}>
                  Events
                </StyledFooterLink>
              </li>
              <li>
                <StyledFooterLink component={RouterLink} to={"/publication?tab=podcast"}>
                  Podcast
                </StyledFooterLink>
              </li>
              <li>
                <StyledFooterLink
                  href="https://drive.google.com/drive/folders/1vKaCEUylP3rX7WO4soYsl3rlEiyhZvhz?usp=drive_link&fbclid=IwAR2TB7gsrFN36Hc6IbCxbfTPV0ahitg_HP7wYnDv0I6fc3HogHMqk13PE_g"
                  target="_blank"
                >
                  Workshops
                </StyledFooterLink>
              </li>
              <li>
                <StyledFooterLink component={RouterLink} to={"/gallery"}>
                  Explore
                </StyledFooterLink>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul className="links">
            <li>
                <StyledFooterLink component={RouterLink} to={"/publication?tab=articles"}>
                  Articles
                </StyledFooterLink>
              </li>
              <li>
                <StyledFooterLink
                  href="https://drive.google.com/drive/folders/1v5_QzgazIEHUM9xrELXgcYFa4PQCxzgQ?fbclid=IwAR1C2-BsLWJ-mzNVJuULP4i0h3xR8MDcvDL3IMzDfbYV0Lt_1yP4bI_ZQcQ"
                  target="_blank"
                >
                  Problem Sets
                </StyledFooterLink>
              </li>

              <li>
                <StyledFooterLink
                  href="https://matholympiad.org.bd/math-related-book-list"
                  target="_blank"
                >
                  Math Olympiad Book List
                </StyledFooterLink>
              </li>
              <li>
                <StyledFooterLink
                  href="https://drive.google.com/drive/folders/1u4wrZoFitXTyvjl-wAs9Kp0QMsWZmuQn?fbclid=IwAR1b9Ehw1QmNtouIoRTRjQrRRp4vNDlcsYvrWbFjZ6AJZXmWCMfzOgVL2l0"
                  target="_blank"
                >
                  Math Resources Collection
                </StyledFooterLink>
              </li>
              <li>
                <StyledFooterLink
                  href="https://artofproblemsolving.com/community/"
                  target="_blank"
                >
                  Art of Problem Solving
                </StyledFooterLink>
              </li>
              <li>
                <StyledFooterLink
                  href="https://mathworld.wolfram.com/"
                  target="_blank"
                >
                  Wolfram MathWorld
                </StyledFooterLink>
              </li>
            </ul>
          </div>
          
          <div className="footer-col">
           
            <h4>Subscribe to our Notifications</h4>
            <p>
              Don’t miss out on any updates from the Notre Dame Math Club.
              Subscribe to our notifications and stay informed about our latest
              news and events.
            </p>
            <form
              action="#"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
              onSubmit={handleSubmit}
            >
              <Grid container alignItems={"stretch"} gap="5px">
                <Grid item xs={7}>
                  <input
                    type="text"
                    placeholder="Your email"
                    required
                    name="email"
                    value={state}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <MagicButton
                    style={{ margin: "0px", padding: "8px" }}
                    type="submit"
                    variant={"contained"}
                  >
                    SUBSCRIBE
                  </MagicButton>
                </Grid>
              </Grid>
            </form>
            
            <div className="icons">
              <a
                style={{ textDecoration: "none" }}
                href="https://www.facebook.com/official.ndmc"
                target="_blank"
              >
                <Icon icon={"facebook"} icontype={"fill"} />
              </a>
              <a
                style={{ textDecoration: "none" }}
                href="https://www.instagram.com/ndmc.official/?fbclid=IwAR3Ha0owAaxJqEZPtkAB6BpJDQK8gcyl9ht1QWMdt6balZxGEiJ77sft12Q"
                target="_blank"
              >
                <Icon icon={"instagram"} icontype={"fill"} />
              </a>
              <a
                style={{ textDecoration: "none" }}
                href="https://www.youtube.com/@ndmc.official"
                target="_blank"
              >
                <Icon icon={"youtube"} icontype={"fill"} />
              </a>

              <a
                style={{ textDecoration: "none" }}
                href="https://www.linkedin.com/company/ndmc-official?fbclid=IwAR2YYMPswijICRTH8lf1c-gTtMTDkVzXjZ3R6nhpvUaT7UX-AMQFPFwYivI"
                target="_blank"
              >
                <Icon icon={"linkedin"} icontype={"fill"} />
              </a>
            </div>
          </div>
        </div>

        <CopyRightBoxContent>
          <span
            className="copyright"
            style={{ marginRight: "5px", fontWeight: "600" }}
          >
            Copyright © {new Date().getFullYear()} by Notre Dame Math Club |
          </span>

          <StyledFooterLink
            component={RouterLink}
            to={"/developers"}
            sx={{ fontSize: "1rem" }}
          >
            Meet our team
          </StyledFooterLink>
          <span className="finishingtitle" style={{ display: "block" }}>
            Explore the beauty of mathematics, solve challenging problems, and
            connect with like-minded peers.
          </span>
        </CopyRightBoxContent>

        <Splash fontSize={0.1} />
        {/* <Splash position={{ right: 0, bottom: 0 }} /> */}
      </section>
    </FooterDesign>
  );
};

export default Footer;
