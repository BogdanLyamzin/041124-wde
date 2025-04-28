import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  //   const increase = ()=> setCounter(prevCounter => prevCounter + 1);
  //   const decrease = ()=> setCounter(prevCounter => prevCounter - 1);
  //   console.log("create changeCounter function");
  //   const changeCounter = (action) => {
  //     switch (action) {
  //       case "increase":
  //         return setCounter((prevCounter) => prevCounter + 1);
  //       case "decrease":
  //         return setCounter((prevCounter) => prevCounter - 1);
  //     }
  //   };
  const changeCounter = (event) => {
    const {action} = event.target.dataset;
    const value = action === "increase" ? 1 : -1;
    setCounter((prevCounter) => prevCounter + value);
    // switch (event.target.dataset.action) {
    //   case "increase":
    //     return setCounter((prevCounter) => prevCounter + 1);
    //   case "decrease":
    //     return setCounter((prevCounter) => prevCounter - 1);
    // }
  };

  return (
    <div>
      <p>{counter}</p>
      <div>
        <button data-action="decrease" onClick={changeCounter}>
          -
        </button>
        <button data-action="increase" onClick={changeCounter}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
