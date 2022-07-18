import { Box, Scrollable } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React, { useContext } from "react";

import { context } from "../../../Context";
import ModalPayload from "./ModalPayload";

const Display: FC = () => {
  const { state } = useContext(context);

  return (
    <Scrollable vertical>
      <Box height={"100%"} width={"100%"}>
        <ModalPayload blocks={state.doc.payload} />
      </Box>
    </Scrollable>
  );
};

export default Display;
