/** @jsxImportSource @emotion/react */
import { Flex } from "antd";

import Container from "../../shared/components/Container/Container";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

import { headerStyle } from "./headeStyles";

const Header = () => {
  return (
    <header css={headerStyle}>
      <Container>
        <Flex justify="space-between" align="center">
          <HeaderLogo />
          <HeaderMenu />
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
