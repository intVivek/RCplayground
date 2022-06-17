import { css } from "@rocket.chat/css-in-js";
import { Box } from "@rocket.chat/fuselage";
// import * as uikit from "@rocket.chat/fuselage-ui-kit";
// import * as UiKit from "@rocket.chat/ui-kit";
import type { FC } from "react";
import React, { useContext } from "react";

import { context } from "../../../Context";

const Editor: FC = () => {
  const {
    state: { isTablet },
  } = useContext(context);
  const editor = css``;
  return (
    <Box
      width={isTablet ? "50%" : "40%"}
      height={"100%"}
      bg={"#f6f9fc"}
      zIndex={3}
      elevation="1"
      className={editor}
    ></Box>
  );
};

export default Editor;
