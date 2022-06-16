import { css } from "@rocket.chat/css-in-js";
import { Box, Label } from "@rocket.chat/fuselage";
import React, { useState } from "react";

import { ReactComponent as Chevron } from "../../../Assets/Icon/chevron.svg";
import { capitalize, capitalizeWhole } from "../../../Utils";
import ItemsIcon from "./ItemsIcon";
import itemStyle from "./itemsStyle";

type ItemProps = {
  label: string;
  layer: number;
  children?: ReadonlyArray<JSX.Element>;
};

const Items = ({ label, children, layer }: ItemProps) => {
  const [isOpen, toggleItemOpen] = useState<boolean>(!layer || false);

  return (
    <Box mbe={layer === 1 ? "10px" : "0px"}>
      <Box
        display="flex"
        alignItems="center"
        pis={`${layer * 10}px`}
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
              <Chevron style={{ width: "14px", height: "14px" }} />
            </Box>
          )}
        </Box>
        <Box height="24px" display="flex" alignItems="center">
          {<ItemsIcon layer={layer} />}
          <Label
            fontSize={12}
            pis="3px"
            fontWeight={layer === 1 ? 800 : 500}
            letterSpacing={layer === 1 ? "0.15em" : "0.05em"}
            color={layer === 1 ? "hint" : "info"}
          >
            {layer === 1 ? capitalizeWhole(label) : capitalize(label)}
          </Label>
        </Box>
      </Box>
      <Box>{isOpen && children}</Box>
    </Box>
  );
};

export default Items;
