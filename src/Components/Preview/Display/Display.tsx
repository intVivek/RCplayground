import { Box, Scrollable } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React from "react";

const Display: FC = () => (
  <Scrollable vertical>
    <Box height={"100%"} flexGrow={1} zIndex={1}></Box>
  </Scrollable>
);

export default Display;
