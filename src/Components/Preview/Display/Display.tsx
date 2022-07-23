import { Box, Scrollable } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Container } from "./Container";

const Display: FC = () => (
  <Scrollable vertical>
    <Box height={"100%"} width={"100%"}>
      <DndProvider backend={HTML5Backend}>
        <Container />
      </DndProvider>
    </Box>
  </Scrollable>
);

export default Display;
