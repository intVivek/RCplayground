import { css } from "@rocket.chat/css-in-js";
import { Box, ButtonGroup } from "@rocket.chat/fuselage";
import React, { useContext } from "react";
import type { FC } from "react";

import { context } from "../../../Context";
import PanelBtn from "./PanelBtn";
import TabChange from "./TabChange";

const NavPanel: FC = () => {
  const {
    state: { isMobile, isTablet },
  } = useContext(context);
  return (
    <Box
      width={"100%"}
      height={"40px"}
      borderBlockEnd="1px solid #e6e6e6"
      display={"flex"}
      alignItems={"center"}
      justifyContent={isMobile ? "flex-end" : "space-between"}
      bg="alternative"
    >
      {!isMobile && (
        <ButtonGroup
          pis={"20px"}
          className={css`
            column-gap: 10px;
          `}
        >
          <PanelBtn
            avatar={
              "https://raw.githubusercontent.com/RocketChat/fuselage/db54ddd7ac78ec68bcab4f8cf521806f2c5c7984/packages/icons/src/file.dir.svg"
            }
            name={"Clear Blocks"}
            isSmall={isTablet}
          />
          <PanelBtn
            avatar={
              "https://raw.githubusercontent.com/RocketChat/fuselage/db54ddd7ac78ec68bcab4f8cf521806f2c5c7984/packages/icons/src/copy.svg"
            }
            name={"Copy Payload"}
            isSmall={isTablet}
          />
        </ButtonGroup>
      )}
      {isTablet && <TabChange />}
    </Box>
  );
};

export default NavPanel;
