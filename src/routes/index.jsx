import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/about";
import Events from "../pages/events";
import Gallery from "../pages/gallery";
import Executives from "../pages/executives";
import Membership from "../pages/membership";
import Contact from "../pages/contact";
import CertificateValidation from "../pages/certificate-validation";
import NotFound from "../pages/notFound";
import Publication from "../pages/publication";
// import Login from "../pages/login";
// import FestRegistration from "../pages/fest-registration";
import DevelopersPage from "../pages/developers";
// import Solo from "../pages/type-registration/solo";
// import Frame from "../pages/frame";
// import CA from "../pages/type-registration/ca";
// import Dashboard from "../pages/dashboard";
// import TeamRegistration from "../pages/type-registration/team";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/executives" element={<Executives />} />
      <Route path="/developers" element={<DevelopersPage />} />
      <Route path="/publication" element={<Publication />} />
      <Route path="/certificate" element={<CertificateValidation />} />
      {/*<Route path="/nmf/register/:ca_ref" element={<Solo />} /> */}
      {/*<Route path="/nmf/ca" element={<CA />} /> */}
      {/*<Route path="/nmf/register" element={<Solo />} /> */}
      {/*<Route path="/nmf/treasure" element={<TeamRegistration />} /> */}
      {/*<Route path="/nmf/frame" element={<Frame />} /> */}
      {/*<Route path="/nmf" element={<FestRegistration />} /> */}
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/*<Route path="/dashboard" element={<Dashboard />} />*/}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
