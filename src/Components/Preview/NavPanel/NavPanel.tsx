import { css } from "@rocket.chat/css-in-js";
import { Box, ButtonGroup } from "@rocket.chat/fuselage";
import React, { useContext } from "react";
import type { FC } from "react";

import { ReactComponent as Copy } from "../../../Assets/Icon/copy.svg";
import { ReactComponent as File } from "../../../Assets/Icon/file.svg";
import { context } from "../../../Context";
import PanelBtn from "./PanelBtn";
import TabChange from "./TabChange";

const NavPanel: FC = () => {
  const {
    state: { isMobile, isTablet },
  } = useContext(context);

  const tabsItem: string[] = ["Preview", "Editor"];
  return (
    <Box
      width={"100%"}
      height={"40px"}
      borderBlockEnd="1px solid #e6e6e6"
      display={"flex"}
      alignItems={"center"}
      zIndex={1}
      justifyContent={isMobile ? "flex-end" : "space-between"}
      bg="alternative"
      className={css`
        user-select: none;
      `}
    >
      {!isMobile && (
        <ButtonGroup
          pis={"20px"}
          className={css`
            column-gap: 10px;
          `}
        >
          <PanelBtn
            icon={<File width={16} />}
            name={"Clear Blocks"}
            isSmall={isTablet}
          />
          <PanelBtn
            icon={<Copy width={16} />}
            name={"Copy Payload"}
            isSmall={isTablet}
          />
        </ButtonGroup>
      )}
      {isTablet && <TabChange tabsItem={tabsItem} />}
    </Box>
  );
};

export default NavPanel;
