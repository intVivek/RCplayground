import { Box, Scrollable } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React, { useContext } from "react";

import { context } from "../../../Context";
import ModalPayload from "./ModalPayload";

const Display: FC = () => {
  const { state } = useContext(context);

  return (
    <Scrollable vertical>
      <Box height={"100%"} flexGrow={1} padding={"10px"} zIndex={1}>
        <ModalPayload blocks={state.payload} />
      </Box>
    </Scrollable>
  );
};

export default Display;
