import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "./Header/Header";
import Navigation from "../pages/Navigation";
import Footer from "./Footer/Footer";

import { getCurrentUser } from "../redux/auth/auth-thunks";

import "../shared/styles/style.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Navigation />
      <Footer />
    </>
  );
}

export default App;
