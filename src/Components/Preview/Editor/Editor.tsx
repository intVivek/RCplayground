import { Box, Scrollable } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React from "react";

import CodeEditor from "../../CodeEditor";
import extensions from "../../CodeEditor/Extensions";

const Editor: FC = () => (
  <Scrollable vertical>
    <Box
      padding={"10px"}
      height={"100%"}
      zIndex={1}
      bg={"#f6f9fc"}
      borderInlineStart={"var(--default-border)"}
    >
      <CodeEditor extensions={extensions} />
    </Box>
  </Scrollable>
);

export default Editor;
