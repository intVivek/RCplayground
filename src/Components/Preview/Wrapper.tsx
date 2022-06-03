import { css } from "@rocket.chat/css-in-js";
import { Box } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React from "react";
import { useSelector } from "react-redux";

import type { stateType } from "../../Store";
import Display from "./Display";
import Editor from "./Editor";

const Wrapper: FC = () => {
  const { isTablet, editorToggle } = useSelector((state: stateType) => state);

  return (
    <Box position="relative" width={"100%"} flexGrow={1}>
      <Box
        position="absolute"
        width={isTablet ? "200%" : "100%"}
        height={"100%"}
        display={"flex"}
        className={
          editorToggle
            ? css`
                transition: 0.5s ease;
                transform: translateX(-50%);
              `
            : css`
                transition: 0.5s ease;
                transform: translateX(0%);
              `
        }
      >
        <Display />
        <Editor />
      </Box>
    </Box>
  );
};

export default Wrapper;
