import CssBaseline from '@mui/material/CssBaseline';

import ThemeProvider from "../context/ThemeProvider";

import Header from "./Header/Header";
import Navigation from "../pages/Navigation";
import Footer from "./Footer/Footer";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import "../shared/styles/common.css";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Header />
      <Navigation />
      <Footer />
    </ThemeProvider>
  )
}

export default App
