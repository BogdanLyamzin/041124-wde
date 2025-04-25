import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import OurPreference from "../OurPreference/OurPreference";
import User from "../User/User";
import ToggleButton from "../ToggleButton/ToggleButton";
import ToDoList from "../ToDoList/ToDoList";
import Footer from "../Footer/Footer";

import preferenceItems from "../../data/preferenceItems";
import userItems from "../../data/userItems";
import toDoListItems from "../../data/toDoListItems";

import "../../styles/style.css";

function App() {
  return (
    <>
      <Navbar />
      {/* Navbar() */}
      <Header />
      <OurPreference items={preferenceItems} />
      {/* <User name={userItems[0].name} lastName={userItems[0].lastName} /> */}
      <User {...userItems[0]} />
      <ToggleButton>Click me</ToggleButton>
      <ToDoList items={toDoListItems} />
      {/* const props = {
        children: "Click me"
      } 
      ToggleButton(props);
      */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
