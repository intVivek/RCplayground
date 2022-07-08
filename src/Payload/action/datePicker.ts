import type { LayoutBlock } from "@rocket.chat/ui-kit";

export const actionWithDatePicker: LayoutBlock = {
  type: "actions",
  elements: [
    {
      type: "datepicker",
      initialDate: "1990-04-28",
      appId: "dummy-app-id",
      blockId: "dummy-block-id",
      actionId: "dummy-action-id",
      placeholder: {
        type: "plain_text",
        text: "Select a date",
        emoji: true,
      },
    },
  ],
};
