import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import { useSelector } from "react-redux";

import {
  selectAllNotesCount,
  selectImportantNotesCount,
} from "../../../redux/notes/notes-selectors";

const HeaderNotesInfo = () => {
  const count = useSelector(selectAllNotesCount);
  const importantCount = useSelector(selectImportantNotesCount);

  return (
    <Box sx={{
      display: "flex",
      gap: "10px"
    }}>
      <Badge badgeContent={count} color="primary">
        <FormatListBulletedIcon />
      </Badge>
      <Badge badgeContent={importantCount} color="primary">
        <FormatListNumberedRtlIcon />
      </Badge>
    </Box>
  );
};

export default HeaderNotesInfo;
