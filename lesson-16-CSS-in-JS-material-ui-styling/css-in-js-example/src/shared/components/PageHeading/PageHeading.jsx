/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const headingStyle = css`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 25px;
`;

const PageHeading = ({children})=> {
    return <h1 css={headingStyle}>{children}</h1>
}

export default PageHeading;