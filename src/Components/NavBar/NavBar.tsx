import { css } from "@rocket.chat/css-in-js";
import { Box, Tile, Flex } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React from "react";

import SurfaceSelect from "../SurfaceSelect";
import Divider from "./Divider";
import Logo from "./Logo";
import RightNavBtn from "./RightNavBtn";

const NabBar: FC = () => (
  <Flex.Container alignItems="center">
    <Box
      position="relative"
      width={"100%"}
      height={"min(60px, 25vw)"}
      is={Tile}
      padding={"0px"}
      zIndex={"3"}
      elevation={"2"}
      className={css`
        user-select: none;
      `}
    >
      <Logo />
      <Divider />
      <Box flexGrow={1} minWidth="15px" />
      <SurfaceSelect />
      <RightNavBtn />
    </Box>
  </Flex.Container>
);

export default NabBar;
