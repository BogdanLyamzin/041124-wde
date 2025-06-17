import styles from "./MyNotesList.module.css";

const MyNotesList = ({ items = [], editNote, deleteNote }) => {
  const elements = items.map(({ id, title, text, important }) => (
    <li key={id} className={styles.item}>
      <p className={`${styles.title} ${important ? styles.important : ""}`}>{title}</p>
      <p className={styles.text}>
        {text}
      </p>
      <div className={styles.action}>
        {editNote && <button onClick={()=> editNote({id, title, text, important})} type="button" className={styles.btn}>
          Edit
        </button>}
        {deleteNote && <button onClick={()=> deleteNote(id)} type="button" className={styles.btn}>
          Delete
        </button>}
      </div>
    </li>
  ));

  return <ul className={styles.list}>{elements}</ul>;
};

export default MyNotesList;
