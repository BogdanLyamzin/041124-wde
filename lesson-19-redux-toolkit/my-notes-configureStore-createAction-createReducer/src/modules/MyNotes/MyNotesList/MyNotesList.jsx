import Grid from '@mui/material/Grid';

import MyNotesListItem from "./MyNotesListItem/MyNotesListItem";

// import styles from "./MyNotesList.module.css";

const MyNotesList = ({ items = [], ...callbacks }) => {
  const elements = items.map((item) => (
    <Grid key={item.id} size={4}><MyNotesListItem {...item} {...callbacks} /></Grid>
  ));

  return <Grid sx={{mt: 3}} container spacing={2}>{elements}</Grid>;
};

export default MyNotesList;
