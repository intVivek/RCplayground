import { Box, Tile, Flex } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React from "react";

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
    >
      <Logo />
      <Divider />
      <RightNavBtn />
    </Box>
  </Flex.Container>
);

export default NabBar;
