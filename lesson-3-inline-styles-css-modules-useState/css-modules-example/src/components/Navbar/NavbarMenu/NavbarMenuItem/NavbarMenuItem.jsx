import styles from "./NavbarMenuItem.module.css";

const NavbarMenuItem = ({href, text}) => {
  return (
    <li>
      <a href={href} className={styles.link}>
        {text}
      </a>
    </li>
  );
};

export default NavbarMenuItem;
