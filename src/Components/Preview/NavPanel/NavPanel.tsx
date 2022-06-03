import { css } from "@rocket.chat/css-in-js";
import { Box, ButtonGroup } from "@rocket.chat/fuselage";
import zip from "@rocket.chat/icons";
import React from "react";
import type { FC } from "react";
import { useSelector } from "react-redux";

import type { stateType } from "../../../Store";
// import copy from "../../assets/icon/copy.svg";
// import file from "../../assets/icon/file.svg";
import PannelBtn from "./PannelBtn";
import TabChange from "./TabChange";

const NavPanel: FC = () => {
  const { isMobile, isTablet } = useSelector((state: stateType) => state);

  console.log(zip);
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
          <PannelBtn
            avatar={"../../assets/icon/copy.svg"}
            name={"Clear Blocks"}
            isSmall={isTablet}
          />
          <PannelBtn
            avatar={"../../assets/icon/file.svg"}
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
