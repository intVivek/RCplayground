import { Box, Scrollable } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React, { useContext } from "react";

import { context } from "../../../Context";
import CodeEditor from "../../CodeEditor";
import extensions from "../../CodeEditor/Extensions";

const Editor: FC = () => {
  const {
    state: { isTablet },
  } = useContext(context);

  return (
    <Scrollable vertical>
      <Box
        width={isTablet ? "50%" : "40%"}
        height={"100%"}
        bg={"#f6f9fc"}
        borderInlineStart={"var(--default-border)"}
      >
        <CodeEditor extensions={extensions} />
      </Box>
    </Scrollable>
  );
};

export default Editor;
