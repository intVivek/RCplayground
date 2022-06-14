import { css } from "@rocket.chat/css-in-js";
import { Box } from "@rocket.chat/fuselage";
import React, { useContext } from "react";

import { context } from "../../Context";
import Display from "./Display";
import Editor from "./Editor";

const Wrapper = () => {
  const {
    state: { isTablet, tabsToggle },
  } = useContext(context);

  const tabChangeStyle = () => {
    switch (tabsToggle) {
      case 0:
        return css`
          transition: 0.5s ease;
          transform: translateX(0%);
        `;
      case 1:
        return css`
          transition: 0.5s ease;
          transform: translateX(-50%);
        `;
    }
  };
  return (
    <Box position="relative" width={"100%"} flexGrow={1}>
      <Box
        position="absolute"
        width={isTablet ? "200%" : "100%"}
        height={"100%"}
        display={"flex"}
        className={tabChangeStyle()}
      >
        <Display />
        <Editor />
      </Box>
    </Box>
  );
};

export default Wrapper;
