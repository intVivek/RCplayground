import type { LayoutBlock } from "@rocket.chat/ui-kit";

export const actionWithButtonDefault: LayoutBlock = {
  type: "actions",
  elements: [
    {
      type: "button",
      appId: "dummy-app-id",
      blockId: "dummy-block-id",
      actionId: "dummy-action-id",
      text: {
        type: "plain_text",
        text: "Click Me",
        emoji: true,
      },
    },
  ],
};

export const actionWithButtonPrimary: LayoutBlock = {
  type: "actions",
  elements: [
    {
      type: "button",
      appId: "dummy-app-id",
      blockId: "dummy-block-id",
      actionId: "dummy-action-id",
      text: {
        type: "plain_text",
        text: "Click Me",
        emoji: true,
      },
      style: "primary",
    },
  ],
};

export const actionWithButtonDanger: LayoutBlock = {
  type: "actions",
  elements: [
    {
      type: "button",
      appId: "dummy-app-id",
      blockId: "dummy-block-id",
      actionId: "dummy-action-id",
      text: {
        type: "plain_text",
        text: "Click Me",
        emoji: true,
      },
      style: "danger",
    },
  ],
};

export const actionWithButtonAsLink: LayoutBlock = {
  type: "actions",
  elements: [
    {
      type: "button",
      appId: "dummy-app-id",
      blockId: "dummy-block-id",
      actionId: "dummy-action-id",
      text: {
        type: "plain_text",
        text: "Click Me",
        emoji: true,
      },
      url: "https://rocket.chat",
    },
  ],
};
