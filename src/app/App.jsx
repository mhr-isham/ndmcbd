/**
 * Notre Dame Math Club Website
 *
 */

import { useRecoilState } from "recoil";
import Header from "../components/header";
import GlobalStyles from "../components/styles/Global.style";
import {
  ApplicationWrapper,
  PageContainer,
} from "../components/styles/Page.style";
import AppRouter from "../routes";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";
import themeOptions from "../theme/themeOptions";
import mode from "../store/atoms/themeAtom";
import Footer from "../components/footer";
import { SnackbarProvider } from "notistack";
import StyledMaterialDesignContent from "../components/ui/notificationDesign";
import { festStatus } from "../store/atoms/festdata";
import { CheckFestStatus } from "../api/festRegistration";

const App = () => {
  const [appMode, setMode] = useRecoilState(mode);
  const theme = createTheme({ ...themeOptions(appMode) });
  const [initialRender, setRender] = useState(true);

  // const [currFestStatus, setFestStatus] = useRecoilState(festStatus);

  // check fest status

  useEffect(() => {
    // checkStatus();
    const prevMode = localStorage.getItem("mode");
    if (prevMode) {
      setMode(prevMode);
    } else {
      setMode(appMode);
    }
  }, []);

  useEffect(() => {
    if (initialRender) {
      setRender(false);
      return;
    }

    localStorage.setItem("mode", appMode);
  }, [appMode]);

  return (
    <SnackbarProvider
      preventDuplicate
      // autoHideDuration={2000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
      }}
    >
      <Box sx={{ overflow: "hidden" }}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Box sx={{ width: "100%", position: "relative" }}>
            <Header />
            <PageContainer maxWidth={"xl"}>
              <ApplicationWrapper>
                <AppRouter />
                {/* <Outlet /> */}
              </ApplicationWrapper>
            </PageContainer>
            <Footer />
          </Box>
        </ThemeProvider>
      </Box>
    </SnackbarProvider>
  );
};

export default App;
