// import { Component } from "react";

// class Title extends Component {
//   render() {
//     return <h1>Welcome to React</h1>
//   }
// }

// const Title = ()=> {
//   return <h1>Welcome to React</h1>
// }
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import OurPreference from "../OurPreference/OurPreference";
import User from "../User/User";

import preferenceItems from "../../data/preferenceItems";
import userItems from "../../data/userItems";

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
    </>
  );
}

export default App;
