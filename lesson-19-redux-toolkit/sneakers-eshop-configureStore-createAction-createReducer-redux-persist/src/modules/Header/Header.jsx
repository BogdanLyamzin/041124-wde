/** @jsxImportSource @emotion/react */
import Container from "@mui/material/Container";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

import { headerStyle, headerContentStyle } from "./headeStyles";

const Header = () => {
  return (
    <header css={headerStyle}>
      <Container css={headerContentStyle}>
        <HeaderLogo />
        <HeaderMenu />
      </Container>
    </header>
  );
};

export default Header;
