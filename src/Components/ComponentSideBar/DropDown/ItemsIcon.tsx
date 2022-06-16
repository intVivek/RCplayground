import React from "react";

import { ReactComponent as Burger } from "../../../Assets/Icon/burger.svg";
import { ReactComponent as Folder } from "../../../Assets/Icon/folder.svg";
import { ReactComponent as Star } from "../../../Assets/Icon/star.svg";

const ItemsIcon = ({ layer }: { layer: number }) => {
  const selectIcon = (layer: number) => {
    switch (layer) {
      case 1:
        return <Folder width="12" fill="#1d74f5" />;
      case 2:
        return <Burger width="12" fill="#19ac7c" />;
      case 3:
        return <Star width="12" fill="#f5455c" />;
    }
  };
  return <>{selectIcon(layer)}</>;
};

export default ItemsIcon;
