import Navbar from "./Navbar/Navbar";
import Main from "../shared/components/Main/Main";
import MyPosts from "./MyPosts/MyPosts";

import "../shared/styles/style.css";

function App() {
  return (
    <>
      <Navbar />
      <Main>
        <MyPosts />
      </Main>
    </>
  );
}

export default App;
