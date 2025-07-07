/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const sectionTitleStyle = css`
    font-size: 36px;
    font-weight: 700;
    color:#000000;
    padding-bottom: 37px;
    border-bottom: 1px solid #EAEAEA;
    margin-bottom: 45px;
`;

const SectionTitle = ({children})=> {
    return <h3 css={sectionTitleStyle}>{children}</h3>
}

export default SectionTitle;