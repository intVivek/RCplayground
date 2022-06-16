import { Scrollable, Box } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React from "react";

import DropDown from "./DropDown";
import { mockOrgTreeList } from "./DropDown/data";
import SearchBar from "./SearchBar";

const ScrollableSideBar: FC = () => (
  <Scrollable vertical>
    <Box flexGrow="1" bg={"var(--primaryBackgroundColor)"}>
      <SearchBar />
      <DropDown listMeta={mockOrgTreeList} />
    </Box>
  </Scrollable>
);

export default ScrollableSideBar;
