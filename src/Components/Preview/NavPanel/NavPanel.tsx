import { css } from "@rocket.chat/css-in-js";
import { Box, ButtonGroup } from "@rocket.chat/fuselage";
import keys from "@rocket.chat/icons";
import React from "react";
import type { FC } from "react";
import { useSelector } from "react-redux";

import type { stateType } from "../../../Store";
// import copy from "../../assets/icon/copy.svg";
// import file from "../../assets/icon/file.svg";
import PanelBtn from "./PanelBtn";
import TabChange from "./TabChange";

const NavPanel: FC = () => {
  const { isMobile, isTablet } = useSelector((state: stateType) => state);

  console.log(`${keys.copy}`);
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
      {/* Icon added for testing */}
      {isTablet && <TabChange />}
    </Box>
  );
};

export default NavPanel;
