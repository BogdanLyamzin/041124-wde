import { useState } from "react";

import navbarMenuItems from "./navbarMenuItems";

import styles from "./NavbarMenu.module.css";

const NavbarMenu = () => {
  const [state, setState] = useState(0);

  const handleClick = (event, index)=> {
    event.preventDefault();
    event.stopPropagation();
    setState(index);
  }
 
  const elements = navbarMenuItems.map((item, index) => {
    const fullClassName = index === state ? `${styles.link} ${styles.active}` : styles.link;
    
    return (
      <li key={item.text}>
        <a onClick={(event)=> handleClick(event, index)} href={item.href} className={fullClassName}>
          {item.text}
        </a>
      </li>
    )
  });

  return <ul onClick={()=> console.log("Click on menu")} className={styles.menu}>{elements}</ul>;
};

export default NavbarMenu;
