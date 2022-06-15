import { css } from "@rocket.chat/css-in-js";
import { Box, Avatar, Label } from "@rocket.chat/fuselage";
import React, { useState } from "react";

import { capitalize, capitalizeWhole } from "../../../Utils";
import itemStyle from "./itemsStyle";

type ItemProps = {
  onSelectCallback: (e: React.MouseEvent<HTMLInputElement>) => void;
  label: string;
  layer: number;
  children?: ReadonlyArray<JSX.Element>;
};

const Items = ({ onSelectCallback, label, children, layer }: ItemProps) => {
  const [isOpen, toggleItemOpen] = useState<boolean>(!layer || false);
  const chevron =
    "https://raw.githubusercontent.com/RocketChat/fuselage/8e5b4afbb0954d2e6ca36fbd8bf2580bc64d53ab/packages/icons/src/chevron-left.dir.svg";

  return (
    <Box mbe={layer === 1 ? "10px" : "0px"}>
      <Box
        display="flex"
        alignItems="center"
        pis={`${layer * 10}px`}
        className={itemStyle(layer)}
        onClick={() => toggleItemOpen(!isOpen)}
      >
        <Box size={16}>
          {children && children.length > 0 && (
            <Box
              display={"flex"}
              alignItems={"center"}
              className={css`
                transform: rotate(${isOpen ? "90deg" : "0deg"});
                transition: var(--animation-very-fast);
              `}
            >
              <Avatar size="x16" url={chevron} />
            </Box>
          )}
        </Box>
        <Box
          height="24px"
          onClick={(e: React.MouseEvent<HTMLInputElement>) => {
            onSelectCallback(e);
          }}
        >
          <Label
            fontSize={12}
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
