import type { LayoutBlock } from "@rocket.chat/ui-kit";

export const actionWithMenu: LayoutBlock = {
  type: "actions",
  elements: [
    {
      type: "overflow",
      appId: "dummy-app-id",
      blockId: "dummy-block-id",
      actionId: "dummy-action-id",
      options: [
        {
          value: "option_1",
          text: {
            type: "plain_text",
            text: "lorem ipsum 🚀",
            emoji: true,
          },
        },
        {
          value: "option_2",
          text: {
            type: "plain_text",
            text: "lorem ipsum 🚀",
            emoji: true,
          },
        },
      ],
    },
  ],
};
