import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import EventNoteIcon from '@mui/icons-material/EventNote';
import { Link } from "react-router-dom";

import styles from "./HeaderLogo.module.css";

const HeaderLogo = () => {
  return (
    <Toolbar>
      <Link to="/" className={styles.logo}>
        <EventNoteIcon />
        <Typography variant="h4">My Note App</Typography>
      </Link>
    </Toolbar>
  );
};

export default HeaderLogo;
