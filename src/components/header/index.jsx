import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Container, Slide, Typography, useScrollTrigger } from "@mui/material";
import logo from "../../assets/ndmc.png";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

import HeaderDrawer from "./HeaderDrawer";
import {
  ShiningButton,
  FlexedBox,
  Image,
  NavMenuLink,
  StyledButton,
  StyledIconButton,
  StyledLink,
  Styleda,
} from "../styles/Elements.style";
import {
  HamburgerContainer,
  LogoContainer,
  NavMenuContainer,
  StyledToolbar,
  TopBar,
  NavIconBox,
} from "../styles/Header.style";
import MyIconButton from "../ui/IconButton";
import Icon from "../ui/Icon";
import { useRecoilState, useRecoilValue } from "recoil";
import mode from "../../store/atoms/themeAtom";
import { ProfileImgBox } from "../../pages/type-registration/index.styles";
import { caUser } from "../../store/atoms/profile";
import { caProfile } from "../../store/atoms/caProfile";

const navItems = {
  // Home: "/",
  About: "/about",
  Events: "/events",
  Publication: "/publication",
  Gallery: "/gallery",
  Executives: "/executives",
  // Membership: "/membership",
  Contact: "/contact",
};

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const navigate = useNavigate();
  const [appMode, setMode] = useRecoilState(mode);
  const [isLoggedin, setLogin] = useRecoilState(caUser);
  const caProfileInfo = useRecoilValue(caProfile);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <FlexedBox>
      <CssBaseline />
      <HideOnScroll {...props}>
        <TopBar component="nav">
          <Container variant={{ lg: "lg" }} maxWidth={"xl"}>
            <StyledToolbar>
              <LogoContainer>
                <StyledLink to="/" component={RouterLink}>
                  <Image src={logo} />
                </StyledLink>
              </LogoContainer>

              <NavIconBox>
                <MyIconButton
                  onClick={() =>
                    setMode(appMode === "light" ? "dark" : "light")
                  }
                  icon={appMode === "light" ? "sun" : "moon"}
                />
                {/* CA profile image
                {caProfileInfo.isCa && (
                  <ProfileImgBox
                    img={caProfileInfo.image}
                    onClick={() => navigate("/dashboard")}
                  />
                )}
                */}
                <HamburgerContainer>
                  <IconButton
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                  >
                    <Icon icon={"menu"} icontype={"line"} />
                  </IconButton>
                </HamburgerContainer>
              </NavIconBox>
              <NavMenuContainer>
                {Object.keys(navItems).map((item) => (
                  <NavMenuLink
                    key={item}
                    component={RouterLink}
                    to={navItems[item]}
                  >
                    {item}
                  </NavMenuLink>
                ))}
                <MyIconButton
                  onClick={() =>
                    setMode(appMode === "light" ? "dark" : "light")
                  }
                  icon={appMode === "light" ? "sun" : "moon"}
                />

                <Button
                  component="a"
                  href="https://nmf.ndmcbd.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  sx={{
                    ml: 1,
                    background: 'linear-gradient(45deg, #FFD700 30%, #FF8E53 90%)',
                    color: 'black',
                    fontWeight: 'bold',
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #FF8E53 30%, #FFD700 90%)',
                    }
                  }}
                >
                  6th NMF
                </Button>
                {/* NMF registration button and profile image 
                <ShiningButton
                  variant="contained"
                  component={RouterLink}
                  to="/nmf"
                >
                  Register
                </ShiningButton>
                 
                {caProfileInfo.isCa && (
                  <ProfileImgBox
                    img={caProfileInfo.image}
                    onClick={() => navigate("/dashboard")}
                  /> 
                )}   
                 */ }
              </NavMenuContainer>

            </StyledToolbar>
          </Container>
        </TopBar>
      </HideOnScroll>

      <Box component="nav">
        <HeaderDrawer
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          navItems={navItems}
        />
      </Box>
    </FlexedBox>
  );
};

export default Header;
