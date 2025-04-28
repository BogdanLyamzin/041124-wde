import { useState } from "react";

import styles from "./ToDoList.module.css";

// document.body.addEventListener("click", function(){
//   console.log("click to body");
// })

const ToDoList = ({ items = [] }) => {
  const [listItems, setListItems] = useState(items);

  const onDeleteItem = (event)=> {
    const {action, index} = event.target.dataset;
    if(action === "done") {
      const nornalizedIndex = Number(index);
      setListItems(prevItems => prevItems.filter((_, idx)=> idx !== nornalizedIndex));
    }
  }

  const elements = listItems.map((item, index) => (
    <li key={item} className={styles.item}>
      {item}
      <button type="button" data-action="done" data-index={index}>
        Done
      </button>
    </li>
  ));

  return <ol onClick={onDeleteItem} className={styles.list}>{elements}</ol>;
};

export default ToDoList;
