import { useSelector } from "react-redux";

import {
  selectAllNotesCount,
  selectImportantNotesCount,
} from "../../../redux/notes/notes-selectors";

import styles from "./HeaderNotesInfo.module.css";

const HeaderNotesInfo = () => {
  const count = useSelector(selectAllNotesCount);
  const importantCount = useSelector(selectImportantNotesCount);

  return (
    <p className={styles.info}>
      All: {count}. Important: {importantCount}.
    </p>
  );
};

export default HeaderNotesInfo;
