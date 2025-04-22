import NavbarMenu from "./NavbarMenu/NavbarMenu";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <NavbarMenu />
          <Logo />
          <Button text="Buy Now"  variant="contained" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
