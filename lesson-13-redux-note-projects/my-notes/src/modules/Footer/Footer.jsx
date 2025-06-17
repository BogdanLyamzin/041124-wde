import FooterCopyright from "./FooterCopyright/FooterCopyright";

import styles from "./Footer.module.css";

const Footer = ()=> {
    return (
        <footer className={styles.footer}>
            <FooterCopyright />
        </footer>
    )
}

export default Footer;