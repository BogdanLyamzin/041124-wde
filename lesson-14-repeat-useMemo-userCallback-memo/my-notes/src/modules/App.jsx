import ThemeProvider from "../context/ThemeProvider";

import Header from "./Header/Header";
import Navigation from "../pages/Navigation";
import Footer from "./Footer/Footer";

import "../shared/styles/style.css";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Navigation />
      <Footer />
    </ThemeProvider>
  )
}

export default App
