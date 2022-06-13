import { Scrollable, Box } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React from "react";

import SearchBar from "./SearchBar";

const ScrollableSideBar: FC = () => (
  <Scrollable vertical>
    <Box flexGrow="1" bg={"var(--primaryBackgroundColor)"}>
      <SearchBar />
    </Box>
  </Scrollable>
);

export default ScrollableSideBar;