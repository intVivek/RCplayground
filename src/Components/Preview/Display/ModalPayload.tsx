import { Box } from "@rocket.chat/fuselage";
import { UiKitModal as uiKitModal } from "@rocket.chat/fuselage-ui-kit";
import type { LayoutBlock } from "@rocket.chat/ui-kit";

import DeleteElementBtn from "./DeleteElementBtn";
import ElementWrapper from "./ElementWrapper";

const ModalPayload = ({
  blocks,
}: {
  blocks: Array<readonly LayoutBlock[]>;
}) => (
  <Box>
    {blocks.map((block, i) => (
      <ElementWrapper key={i}>
        <DeleteElementBtn elementIndex={i} />
        <Box>{uiKitModal(block)}</Box>
      </ElementWrapper>
    ))}
  </Box>
);

export default ModalPayload;
