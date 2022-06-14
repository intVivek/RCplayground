import { Box } from "@rocket.chat/fuselage";
import React, { Fragment } from "react";

import Items from "./Items";
import type { Item, ItemBranch } from "./types";

interface DropDownProps {
  readonly listMeta: Item;
  readonly onSelectCallback: (value: ItemBranch) => void;
}

const DropDown = ({ listMeta, onSelectCallback }: DropDownProps) => {
  const recursiveComponentTree = (branch: ItemBranch) => (
    <Items
      id={branch.id}
      key={branch.id}
      onSelectCallback={() => {
        onSelectCallback(branch);
      }}
      isSelected={branch.selected}
      label={branch.label}
    >
      {branch.branches &&
        branch.branches.map((branch: ItemBranch) => (
          <Fragment key={branch.id}>{recursiveComponentTree(branch)}</Fragment>
        ))}
    </Items>
  );

  return (
    <Box>
      {listMeta.map((branch: ItemBranch, i: any) => (
        <Box key={i}>{recursiveComponentTree(branch)}</Box>
      ))}
    </Box>
  );
};

export default DropDown;
