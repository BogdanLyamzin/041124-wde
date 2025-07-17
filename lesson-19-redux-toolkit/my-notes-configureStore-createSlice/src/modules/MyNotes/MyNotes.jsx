import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import MyNotesForm from "./MyNotesForm/MyNotesForm";
import MyNotesList from "./MyNotesList/MyNotesList";

import { selectAllNotes } from "../../redux/notes/notes-selectors";
import {
  addNote,
  editNote,
  toggleNoteImportant,
  deleteNote,
} from "../../redux/notes/notes-slice";

// import styles from "./MyNotes.module.css";

const MyNotes = () => {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState({});
  const notes = useSelector(selectAllNotes);
  const dispatch = useDispatch();

  const toggleDialog = useCallback(
    () => setOpen((prevState) => !prevState),
    []
  );

  const onAddNote = useCallback(
    (payload) => {
      dispatch(addNote(payload));
      toggleDialog();
    },
    [dispatch, toggleDialog]
  );

  const onEditNote = useCallback(
    (payload) => {
      dispatch(editNote(payload));
      setEditData({});
      toggleDialog();
    },
    [dispatch, toggleDialog]
  );

  const onToggleNoteImportant = useCallback(
    (id) => {
      dispatch(toggleNoteImportant(id));
    },
    [dispatch]
  );

  const onDeleteNote = useCallback(
    (id) => {
      dispatch(deleteNote(id));
    },
    [dispatch]
  );

  const isEdit = Boolean(Object.keys(editData).length);

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">My notes</Typography>
        <Button onClick={toggleDialog} variant="outlined" startIcon={<AddIcon />}>
          Add note
        </Button>
      </Stack>
      <Dialog open={open} onClose={toggleDialog}>
        <DialogTitle>{isEdit ? "Edit" : "Add"} note</DialogTitle>
        <DialogContent>
          <MyNotesForm
            defaultValues={editData}
            submitForm={isEdit ? onEditNote : onAddNote}
          />
        </DialogContent>
      </Dialog>
      <MyNotesList
        items={notes}
        editNote={(values)=> {
          setEditData(values);
          toggleDialog();
        }}
        deleteNote={onDeleteNote}
        toggleImportant={onToggleNoteImportant}
      />
    </Box>
  );
};

export default MyNotes;
