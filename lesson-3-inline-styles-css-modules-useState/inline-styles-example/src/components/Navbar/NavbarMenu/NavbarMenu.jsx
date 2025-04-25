import "./NavbarMenu.css";

import NavbarMenuItem from "./NavbarMenuItem/NavbarMenuItem";

import navbarMenuItems from "./navbarMenuItems";

const NavbarMenu = () => {
  const elements = navbarMenuItems.map((item) => <NavbarMenuItem key={item.text} {...item} />); //  <NavbarMenuItem key={item.text}href={item.href} text={item.text} />

  return <ul className="navbar-menu">{elements}</ul>;
};

export default NavbarMenu;
