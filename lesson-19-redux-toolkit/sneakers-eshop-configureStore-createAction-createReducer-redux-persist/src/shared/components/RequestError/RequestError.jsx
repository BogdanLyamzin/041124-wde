/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const requestErrorStyle = css`
    color: red;
`;

const RequestError = ({message})=> {
    if(!message) return null;

    return <p css={requestErrorStyle}>{message}</p>
}

export default RequestError;