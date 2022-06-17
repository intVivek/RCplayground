import { css } from "@rocket.chat/css-in-js";
import { Box, Label } from "@rocket.chat/fuselage";
import React, { useState } from "react";

import { ReactComponent as Chevron } from "../../../Assets/Icon/chevron.svg";
import ItemsIcon from "./ItemsIcon";
import { itemStyle, labelStyle } from "./itemsStyle";

type ItemProps = {
  label: string;
  layer: number;
  children?: ReadonlyArray<JSX.Element>;
};

const Items = ({ label, children, layer }: ItemProps) => {
  const [isOpen, toggleItemOpen] = useState<boolean>(layer === 1);
  return (
    <Box mbe={layer === 1 ? "10px" : "0px"}>
      <Box
        display="flex"
        alignItems="center"
        className={itemStyle(layer)}
        onClick={() => toggleItemOpen(!isOpen)}
      >
        <Box size={16} display="flex" alignItems="center">
          {children && children.length > 0 && (
            <Box
              display={"flex"}
              alignItems={"center"}
              className={css`
                transform: rotate(${isOpen ? "90deg" : "0deg"});
                transition: var(--animation-very-fast);
              `}
            >
              <Chevron width="12px" />
            </Box>
          )}
        </Box>
        <Box height="24px" display="flex" alignItems="center">
          <ItemsIcon layer={layer} lastNode={children === undefined} />
          <Label className={labelStyle(layer)}>{label}</Label>
        </Box>
      </Box>
      <Box>{isOpen && children}</Box>
    </Box>
  );
};

export default Items;
