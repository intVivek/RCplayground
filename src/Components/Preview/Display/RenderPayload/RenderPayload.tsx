import { Box } from "@rocket.chat/fuselage";
import {
  UiKitModal as uiKitModal,
  UiKitBanner as uiKitBanner,
  UiKitMessage as uiKitMessage,
  kitContext,
} from "@rocket.chat/fuselage-ui-kit";
import type { LayoutBlock } from "@rocket.chat/ui-kit";
import React, { useContext } from "react";

import { context, actionPreviewAction } from "../../../../Context";
import DeleteElementBtn from "./DeleteElementBtn";
import ElementWrapper from "./ElementWrapper";

const RenderPayload = ({
  index,
  payload,
  surface,
}: {
  index: number;
  payload: readonly LayoutBlock[];
  surface: number;
}) => {
  const {
    state: { actionPreview },
    dispatch,
  } = useContext(context);

  const uiKitRender: { [key: number]: any } = {
    "1": () => uiKitMessage(payload),
    "2": () => uiKitBanner(payload),
    "3": () => uiKitModal(payload),
  };

  return (
    <ElementWrapper key={index}>
      <DeleteElementBtn elementIndex={index} />
      <Box>
        <kitContext.Provider
          value={{
            action: (a) => {
              actionPreview.action = a;
              console.log(actionPreview);
              dispatch(actionPreviewAction({ ...actionPreview }));
            },
            state: (s) => {
              actionPreview.state = s;
              console.log(actionPreview);
              dispatch(actionPreviewAction({ ...actionPreview }));
            },
            values: {},
            appId: "core",
          }}
        >
          {uiKitRender[surface]()}
        </kitContext.Provider>
      </Box>
    </ElementWrapper>
  );
};

export default RenderPayload;
