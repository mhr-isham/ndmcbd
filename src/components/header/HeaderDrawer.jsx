import {
  Box,
  Button,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import GlassyDrawer from "../ui/GlassyDrawer";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { ShiningButton, StyledLink, Styleda } from "../styles/Elements.style";
import MyIconButton from "../ui/IconButton";
import { useRecoilState } from "recoil";
import darkMode from "../../store/atoms/themeAtom";

//   import Splash from "../ui/Splash";

const drawerWidth = "240";

const HeaderDrawer = ({ mobileOpen, handleDrawerToggle, window, navItems }) => {
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ p: 3 }}>
      <List>
        {Object.keys(navItems).map((item) => (
          <ListItem key={item} style={{ textAlign: "center" }}>
            <ListItemText style={{ fontSize: "1.4rem" }}>
              <StyledLink component={RouterLink} to={navItems[item]}>
                {item}
              </StyledLink>
              {/* <Styleda key={item} href={navItems[item]}>
                {item}
              </Styleda> */}
            </ListItemText>
          </ListItem>
        ))}
        {/*
        <ListItem>
          <ListItemText>
            <ShiningButton
              variant="contained"
              component={RouterLink}
              to="/nmf"
            >
              Register
            </ShiningButton>
          </ListItemText>
        </ListItem> */}
      </List>
      {/* <Splash position={{ left: 0, top: 0 }} width={"100px"} /> */}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <GlassyDrawer
      anchor="right"
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", md: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
          height: "100%",
        },
      }}
    >
      {drawer}
    </GlassyDrawer>
  );
};

export default HeaderDrawer;
