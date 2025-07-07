/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const flex = ({
  justify = "flex-start",
  align = "baseline",
  wrap = "nowrap",
}) => css`
  flex-wrap: ${wrap};
  justify-content: ${justify};
  align-items: ${align};
`;
