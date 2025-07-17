import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "./Header/Header";
import Navigation from "../pages/Navigation";
import Footer from "./Footer/Footer";

import { fetchTodoThunk } from "../redux/todo/todo-thunks";

import "../shared/styles/style.css";

function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchTodoThunk());
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
