// import { useState } from "react";

import MyPurchases from "../MyPurchases/MyPurchases";
import Timer from "../Timer/Timer";
import Todo from "../ToDo/ToDo";
import Posts from "../Posts/Posts";
import RegisterForm from "../RegisterForm/RegisterForm";

function App() {
  // const [showTimer, setShowTimer] = useState(false);
  // const toggleTimer = ()=> setShowTimer(prevState => !prevState);

  return (
    <>
      {/* <MyPurchases /> */}
      {/* <Todo /> */}
      {/* <button onClick={toggleTimer}>{showTimer ? "Hide timer" : "Show timer"}</button>
      {showTimer && <Timer />} */}
      {/* <Posts /> */}
      <RegisterForm />
    </>
  )
}

export default App
