import type { LayoutBlock } from "@rocket.chat/ui-kit";

export const inputWithDatePicker: readonly LayoutBlock[] = [
  {
    type: "input",
    element: {
      type: "datepicker",
      appId: "dummy-app-id",
      blockId: "dummy-block-id",
      actionId: "dummy-action-id",
      initialDate: "1990-04-28",
      placeholder: {
        type: "plain_text",
        text: "Select a date",
        emoji: true,
      },
    },
    label: {
      type: "plain_text",
      text: "Label",
      emoji: true,
    },
  },
];
