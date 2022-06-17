import { Scrollable, Box } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React from "react";

import BlocksTree from "../../Payload/BlocksTree";
import DropDown from "./DropDown";
import SearchBar from "./SearchBar";

const ScrollableSideBar: FC = () => (
  <Scrollable vertical>
    <Box flexGrow="1" bg={"var(--primaryBackgroundColor)"}>
      <SearchBar />
      <DropDown BlocksTree={BlocksTree} />
    </Box>
  </Scrollable>
);

export default ScrollableSideBar;
