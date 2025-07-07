import CSSBaseline from "@mui/material/CssBaseline";

import Header from "./Header/Header";
import Navigation from "../pages/Navigation";
import Footer from "./Footer/Footer";

import "../shared/styles/common.css";

function App() {
  return (
    <>
      <CSSBaseline />
      <Header />
      <Navigation />
      <Footer />
    </>
  );
}

export default App;
