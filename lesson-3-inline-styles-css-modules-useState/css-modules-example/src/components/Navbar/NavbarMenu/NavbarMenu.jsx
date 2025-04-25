import NavbarMenuItem from "./NavbarMenuItem/NavbarMenuItem";

import navbarMenuItems from "./navbarMenuItems";

import styles from "./NavbarMenu.module.css";

const NavbarMenu = () => {
  const elements = navbarMenuItems.map((item) => <NavbarMenuItem key={item.text} {...item} />); //  <NavbarMenuItem key={item.text}href={item.href} text={item.text} />

  return <ul className={styles.menu}>{elements}</ul>;
};

export default NavbarMenu;
