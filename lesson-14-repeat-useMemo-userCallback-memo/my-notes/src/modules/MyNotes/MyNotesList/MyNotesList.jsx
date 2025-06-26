import MyNotesListItem from "./MyNotesListItem/MyNotesListItem";

import styles from "./MyNotesList.module.css";

const MyNotesList = ({ items = [], ...callbacks }) => {
  const elements = items.map((item) => (
    <MyNotesListItem key={item.id} {...item} {...callbacks} />
  ));

  return <ul className={styles.list}>{elements}</ul>;
};

export default MyNotesList;
