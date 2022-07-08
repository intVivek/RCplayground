import type { LayoutBlock } from "@rocket.chat/ui-kit";

export const actionWithLinearScale: LayoutBlock = {
  type: "actions",
  elements: [
    {
      type: "linear_scale",
      appId: "dummy-app-id",
      blockId: "dummy-block-id",
      actionId: "dummy-action-id",
      minValue: 0,
      maxValue: 10,
      initialValue: 7,
    },
  ],
};
