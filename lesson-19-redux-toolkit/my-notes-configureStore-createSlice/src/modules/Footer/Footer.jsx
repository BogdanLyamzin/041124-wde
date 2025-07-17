import Box from '@mui/material/Box';

import FooterCopyright from "./FooterCopyright/FooterCopyright";

// import styles from "./Footer.module.css";

const Footer = ()=> {
    return (
        <Box component="footer" sx={{
            padding: 3,
            display: "flex",
            justifyContent: "center",
        }}>
            <FooterCopyright />
        </Box>
    )
}

export default Footer;