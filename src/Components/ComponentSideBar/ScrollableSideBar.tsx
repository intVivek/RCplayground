import { Scrollable, Box } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React from "react";

import DropDown from "./DropDown";
import { mockOrgTreeList } from "./DropDown/data";
import type { ItemBranch } from "./DropDown/types";
import SearchBar from "./SearchBar";

const onSelect = (value: ItemBranch) => {
  console.log(`you clicked: ${value.label}`);
};

const ScrollableSideBar: FC = () => (
  <Scrollable vertical>
    <Box flexGrow="1" bg={"var(--primaryBackgroundColor)"}>
      <SearchBar />
      <DropDown listMeta={mockOrgTreeList} onSelectCallback={onSelect} />
    </Box>
  </Scrollable>
);

export default ScrollableSideBar;
