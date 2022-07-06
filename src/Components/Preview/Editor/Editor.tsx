import { css } from "@rocket.chat/css-in-js";
import { Box, Scrollable } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React, { useContext } from "react";

import { context } from "../../../Context";
import CodeEditor from "../../CodeEditor";
import extensions from "./Extensions";

const Editor: FC = () => {
  const {
    state: { isTablet },
  } = useContext(context);
  const editor = css``;
  return (
    <Scrollable vertical>
      <Box
        width={isTablet ? "50%" : "40%"}
        height={"100%"}
        bg={"#f6f9fc"}
        borderInlineStart={"var(--default-border)"}
        className={editor}
      >
        <CodeEditor extensions={extensions} />
      </Box>
    </Scrollable>
  );
};

export default Editor;
