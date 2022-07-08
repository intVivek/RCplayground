import type { LayoutBlock } from "@rocket.chat/ui-kit";

export const actionWithSingleStaticSelect: LayoutBlock = {
  type: "actions",
  elements: [
    {
      type: "static_select",
      appId: "dummy-app-id",
      blockId: "dummy-block-id",
      actionId: "dummy-action-id",
      initialValue: "option_2",
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
      placeholder: {
        type: "plain_text",
        text: "Select an item",
      },
    },
  ],
};

export const actionWithMultiStaticSelect: LayoutBlock = {
  type: "actions",
  elements: [
    {
      type: "multi_static_select",
      appId: "dummy-app-id",
      blockId: "dummy-block-id",
      actionId: "dummy-action-id",
      initialValue: ["option_1", "option_2"],
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
      placeholder: {
        type: "plain_text",
        text: "Select an item",
      },
    },
  ],
};
