import { useState } from "react";

import styles from "./ToDoList.module.css";

const ToDoList = ({ items = [] }) => {
  const [listItems, setListItems] = useState(items);

  const handleDeleteItem = (index) => {
    setListItems((prevItems) => prevItems.filter((_, idx)=> idx !== index));
  };

  const elements = listItems.map((item, index) => (
    <li key={item} className={styles.item}>
      {item}
      <button type="button" onClick={() => handleDeleteItem(index)}>
        Done
      </button>
    </li>
  ));

  return <ol className={styles.list}>{elements}</ol>;
};

export default ToDoList;
