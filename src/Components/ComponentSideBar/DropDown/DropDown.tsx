import { Box } from "@rocket.chat/fuselage";
import React, { Fragment } from "react";

import Items from "./Items";
import type { Item, ItemBranch } from "./types";

interface DropDownProps {
  readonly listMeta: Item;
  readonly onSelectCallback: (value: ItemBranch) => void;
}

const DropDown = ({ listMeta, onSelectCallback }: DropDownProps) => {
  const layer = 1;

  const recursiveComponentTree = (branch: ItemBranch, layer: number) => (
    <Items
      onSelectCallback={() => {
        onSelectCallback(branch);
      }}
      layer={layer}
      label={branch.label}
    >
      {branch.branches &&
        branch.branches.map((branch: ItemBranch, index: number) => (
          <Fragment key={index}>
            {recursiveComponentTree(branch, layer + 1)}
          </Fragment>
        ))}
    </Items>
  );

  return (
    <Box>
      {listMeta.map((branch: ItemBranch, i: number) => (
        <Box key={i}>{recursiveComponentTree(branch, layer)}</Box>
      ))}
    </Box>
  );
};

export default DropDown;
