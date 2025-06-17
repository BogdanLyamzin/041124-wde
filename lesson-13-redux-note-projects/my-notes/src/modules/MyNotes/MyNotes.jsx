import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import MyNotesForm from "./MyNotesForm/MyNotesForm";
import MyNotesList from "./MyNotesList/MyNotesList";

import { selectAllNotes } from "../../redux/notes/notes-selectors";
import {
  addNoteCreator,
  editNoteCreator,
  deleteNoteCreator,
} from "../../redux/notes/notes-actions";

import styles from "./MyNotes.module.css";

const MyNotes = () => {
  const [editData, setEditData] = useState({});
  const notes = useSelector(selectAllNotes);
  const dispatch = useDispatch();

  const addNote = (payload) => {
    dispatch(addNoteCreator(payload));
  };

  const editNote = (payload) => {
    dispatch(editNoteCreator(payload));
    setEditData({});
  };

  const deleteNote = (id) => {
    dispatch(deleteNoteCreator(id));
  };

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
      />
    </div>
  );
};

export default MyNotes;
