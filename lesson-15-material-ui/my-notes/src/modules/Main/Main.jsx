
import Box from '@mui/material/Box';

// import styles from "./Main.module.css";

const Main = ({children}) => {
    return <Box component="main" sx={{
        padding: 3
    }}>{children}</Box>
}

export default Main;