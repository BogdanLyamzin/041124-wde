/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

const headerLogoStyle = css`
  font-size: 24px;
  font-weight: 900;
  color: #fff;
  text-decoration: none;
`;

const HeaderLogo = () => (
  <Link to="/" css={headerLogoStyle}>
    Сникер - магазин
  </Link>
);

export default HeaderLogo;
