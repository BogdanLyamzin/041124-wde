import "./NavbarMenuItem.css";

const NavbarMenuItem = ({href, text}) => {
  return (
    <li>
      <a href={href} className="navbar-menu-link">
        {text}
      </a>
    </li>
  );
};

export default NavbarMenuItem;
