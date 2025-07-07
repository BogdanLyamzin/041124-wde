/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Theme from "../context/Theme";

import PageHeading from "../shared/components/PageHeading/PageHeading";
import ToggleButton from "../shared/components/ToggleButton/ToggleButton";

// import { globalStyle } from "../shared/styles/style";

import { flex } from "../shared/styles/shared-styles";

const headerStyle = css`
  padding: 15px 0;
  ${flex({ align: "center", justify: "space-betweeb" })}
`;

function App() {
  return (
    // <Global styles={globalStyle}>
    <Theme>
      <header css={headerStyle}>
        <a href="/">Logo</a>
        <button>Login</button>
      </header>
      <PageHeading>Home page</PageHeading>
      <ToggleButton>CLick me</ToggleButton>
    </Theme>
    // </Global>
  );
}

export default App;
