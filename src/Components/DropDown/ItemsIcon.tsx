import React from "react";

import { ReactComponent as Burger } from "../../Assets/Icon/burger.svg";
import { ReactComponent as Cube } from "../../Assets/Icon/cube.svg";
import { ReactComponent as Folder } from "../../Assets/Icon/folder.svg";

const ItemsIcon = ({
  layer,
  lastNode,
  hover,
}: {
  layer: number;
  lastNode: boolean;
  hover: boolean;
}) => {
  const selectIcon = (layer: number, hover: boolean) => {
    if (layer === 1) {
      return <Folder width="12" fill={hover ? "#fff" : "#1d74f5"} />;
    }
    if (lastNode) {
      return <Cube width="12" fill={hover ? "#fff" : "#f5455c"} />;
    }
    return <Burger width="12" fill={hover ? "#fff" : "#19ac7c"} />;
  };
  return <>{selectIcon(layer, hover)}</>;
};

export default ItemsIcon;
