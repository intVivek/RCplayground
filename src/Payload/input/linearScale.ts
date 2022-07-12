import type { LayoutBlock } from "@rocket.chat/ui-kit";

export const inputWithLinearSelect: readonly LayoutBlock[] = [
  {
    type: "input",
    element: {
      type: "linear_scale",
      appId: "dummy-app-id",
      blockId: "dummy-block-id",
      actionId: "dummy-action-id",
      minValue: 0,
      maxValue: 10,
      initialValue: 7,
    },
    label: {
      type: "plain_text",
      text: "Label",
      emoji: true,
    },
  },
];
