import { css } from "@rocket.chat/css-in-js";
import { Box, Scrollable } from "@rocket.chat/fuselage";
// import * as uikit from "@rocket.chat/fuselage-ui-kit";
// import * as UiKit from "@rocket.chat/ui-kit";
import type { FC } from "react";
import React, { useContext } from "react";

import { context } from "../../../Context";
import CodeEditor from "../../CodeEditor";

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
        <CodeEditor />
      </Box>
    </Scrollable>
  );
};

export default Editor;
