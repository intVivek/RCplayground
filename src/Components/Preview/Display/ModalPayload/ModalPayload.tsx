import { Box } from "@rocket.chat/fuselage";
import { UiKitModal as uiKitModal } from "@rocket.chat/fuselage-ui-kit";
import type { LayoutBlock } from "@rocket.chat/ui-kit";
import React from "react";

import DeleteElementBtn from "./DeleteElementBtn";
import ElementWrapper from "./ElementWrapper";

const ModalPayload = ({
  index,
  payload,
}: {
  index: number;
  payload: readonly LayoutBlock[];
}) => (
  <ElementWrapper key={index}>
    <DeleteElementBtn elementIndex={index} />
    <Box>{uiKitModal(payload)}</Box>
  </ElementWrapper>
);

export default ModalPayload;
