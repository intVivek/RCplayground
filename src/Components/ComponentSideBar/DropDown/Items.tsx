import { Box } from "@rocket.chat/fuselage";
import React, { useState } from "react";

type ItemProps = {
  id: string;
  onSelectCallback: (e: React.MouseEvent<HTMLInputElement>) => void;
  label: string;
  isSelected: boolean | undefined;
  children?: ReadonlyArray<JSX.Element>;
};

const Items = ({
  onSelectCallback,
  label,
  isSelected,
  children,
}: ItemProps) => {
  const [isOpen, toggleItemOpen] = useState<boolean>(isSelected || false);

  return (
    <Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        onClick={() => toggleItemOpen(!isOpen)}
      >
        {children && children.length > 0 && <Box>{isOpen ? "v" : ">"}</Box>}
        <Box
          height="24px"
          onClick={(e: React.MouseEvent<HTMLInputElement>) => {
            onSelectCallback(e);
          }}
        >
          {label}
        </Box>
      </Box>
      <Box pis="10px">{isOpen && children}</Box>
    </Box>
  );
};

export default Items;
