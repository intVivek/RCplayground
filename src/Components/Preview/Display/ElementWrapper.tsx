import { css } from "@rocket.chat/css-in-js";
import { Box } from "@rocket.chat/fuselage";
import type { ReactElement, ReactNode } from "react";
import React from "react";

const ElementWrapper = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => (
  <Box
    children={children}
    className={css`
      position: relative;
      box-sizing: border-box;
      border: 1px solid transparent;
      align-items: center;
      padding: 7px;
      border-radius: 4px;
      transition: var(--animation-fast);
      &:hover {
        border: var(--elements-border);
        transition: var(--animation-fast);
        box-shadow: 0px 0px 8px 1px #ddd;
        > .closeBtn {
          visibility: visible !important;
        }
      }
      & > div > div {
        margin: 0 !important;
      }
    `}
  />
);

export default ElementWrapper;
