import { css } from "@emotion/react";

import { resetStyle } from "./reset";

export const globalStyle = css`
    ${resetStyle};

    * {
        box-sizing: border-box;
    }

    & .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }
`;