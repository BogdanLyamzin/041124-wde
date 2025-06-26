import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import MyNotesForm from "./MyNotesForm/MyNotesForm";
import MyNotesList from "./MyNotesList/MyNotesList";

import { selectAllNotes } from "../../redux/notes/notes-selectors";
import {
  addNoteCreator,
  editNoteCreator,
  toggleNoteImportantCreator,
  deleteNoteCreator,
} from "../../redux/notes/notes-actions";

import styles from "./MyNotes.module.css";

const MyNotes = () => {
  const [editData, setEditData] = useState({});
  const notes = useSelector(selectAllNotes);
  const dispatch = useDispatch();

  const addNote = useCallback((payload) => {
    dispatch(addNoteCreator(payload));
  }, [dispatch]);

  const editNote = useCallback((payload) => {
    dispatch(editNoteCreator(payload));
    setEditData({});
  }, [dispatch]);

  const toggleNoteImportant = useCallback((id) => {
    dispatch(toggleNoteImportantCreator(id));
  }, [dispatch]);

  const deleteNote = useCallback((id) => {
    dispatch(deleteNoteCreator(id));
  }, [dispatch]);

  const isEdit = Boolean(Object.keys(editData).length);

  return (
    <div className={styles.wrapper}>
      <MyNotesForm
        defaultValues={editData}
        submitForm={isEdit ? editNote : addNote}
      />
      <MyNotesList
        items={notes}
        editNote={setEditData}
        deleteNote={deleteNote}
        toggleImportant={toggleNoteImportant}
      />
    </div>
  );
};

export default MyNotes;
