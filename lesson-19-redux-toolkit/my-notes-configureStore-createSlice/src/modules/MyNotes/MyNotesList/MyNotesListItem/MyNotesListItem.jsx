import {memo} from "react";

import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from "@mui/material/Stack";

// import styles from "./MyNotesListItem.module.css";

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
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{
          fontWeight: important ? 700 : 400
        }} gutterBottom>
          {title}
        </Typography>
        <Typography>
          {text}
        </Typography>
      </CardContent>
      
      <CardActions>
        {editNote && (
          <Stack sx={{cursor: "pointer"}} onClick={() => editNote({ id, title, text, important })} direction="row" gap={1} alignItems="center">
            <EditIcon />
            <Typography>Edit</Typography>
          </Stack>
        )}
        {deleteNote && (
                    <Stack sx={{cursor: "pointer"}} onClick={() => deleteNote(id)} direction="row" gap={1} alignItems="center">
                    <DeleteIcon />
                    <Typography>Delete</Typography>
                  </Stack>
        )}
        {toggleImportant && (
          <FormControlLabel control={<Switch onClick={() => toggleImportant(id)} defaultChecked={important} />} label={important ? "important" : "not important"} />
        )}
      </CardActions>
    </Card>
  );
};

export default memo(MyNotesListItem);
