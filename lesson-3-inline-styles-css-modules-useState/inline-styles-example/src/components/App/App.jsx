import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import OurPreference from "../OurPreference/OurPreference";
import User from "../User/User";
import Footer from "../Footer/Footer";

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
      <Footer />
    </>
  );
}

export default App;
