import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { RecoilRoot } from "recoil";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// import { HelmetProvider } from "react-helmet-async";
// import { hydrate } from "react-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <HelmetProvider>
    <RecoilRoot>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </HelmetProvider>
  // </React.StrictMode>
);
