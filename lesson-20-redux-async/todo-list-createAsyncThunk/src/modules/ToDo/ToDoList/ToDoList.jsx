import styles from "./ToDoList.module.css";

const ToDoList = ({ items = [], onToggleCompleted, deleteTodo }) => {
  const elements = items.map(data => {
    return (
      <li key={data.id} className={styles.item}>
        <p className={`${styles.text} ${data.completed ? styles.completed : ""}`}>
          {data.text}.
        </p>
        <div className={styles.actions}>
          <button onClick={()=> onToggleCompleted(data)} type="button">
            Mark {data.completed ? "uncompleted" : "completed"}
          </button>
          <button onClick={()=> deleteTodo(data.id)} type="button">delete todo</button>
        </div>
      </li>
    );
  });

  return <ol>{elements}</ol>;
};

export default ToDoList;
