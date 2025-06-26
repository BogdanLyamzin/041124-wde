import {memo} from "react";

import styles from "./MyNotesListItem.module.css";

const MyNotesListItem = ({
  id,
  title,
  text,
  important,
  editNote,
  deleteNote,
  toggleImportant,
}) => {
  return (
    <li className={styles.item}>
      <p className={`${styles.title} ${important ? styles.important : ""}`}>
        {title}
      </p>
      <p className={styles.text}>{text}</p>
      <div className={styles.action}>
        {editNote && (
          <button
            onClick={() => editNote({ id, title, text, important })}
            type="button"
            className={styles.btn}
          >
            Edit
          </button>
        )}
        {deleteNote && (
          <button
            onClick={() => deleteNote(id)}
            type="button"
            className={styles.btn}
          >
            Delete
          </button>
        )}
        {toggleImportant && (
          <button
            onClick={() => toggleImportant(id)}
            type="button"
            className={styles.btn}
          >
            {important ? "not important" : "important"}
          </button>
        )}
      </div>
    </li>
  );
};

export default memo(MyNotesListItem);
