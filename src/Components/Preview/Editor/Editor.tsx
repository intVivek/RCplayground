import { css } from "@rocket.chat/css-in-js";
import { Box } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React from "react";
import { useSelector } from "react-redux";

import type { stateType } from "../../../Store";

const Editor: FC = () => {
  const { isTablet } = useSelector((state: stateType) => state);

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
