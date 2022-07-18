import { Box } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React from "react";

import CodeEditor from "../../CodeEditor";
import extensions from "../../CodeEditor/Extensions";

const Editor: FC = () => (
  <Box
    position="relative"
    height={"100%"}
    width={"100%"}
    zIndex={1}
    bg={"#f6f9fc"}
    display={"flex"}
    borderInlineStart={"var(--default-border)"}
    overflow={"auto"}
  >
    <CodeEditor extensions={extensions} />
  </Box>
);

export default Editor;
