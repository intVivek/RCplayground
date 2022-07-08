import type { LayoutBlock } from "@rocket.chat/ui-kit";

export const sectionWithButtonDefault: LayoutBlock = {
  type: "section",
  text: {
    type: "mrkdwn",
    text: "This is a section block with a button.",
  },
  accessory: {
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
};

export const sectionWithButtonPrimary: LayoutBlock = {
  type: "section",
  text: {
    type: "mrkdwn",
    text: "This is a section block with a button.",
  },
  accessory: {
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
};

export const sectionWithButtonDanger: LayoutBlock = {
  type: "section",
  text: {
    type: "mrkdwn",
    text: "This is a section block with a button.",
  },
  accessory: {
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
};

export const sectionWithButtonAsLink: LayoutBlock = {
  type: "section",
  text: {
    type: "mrkdwn",
    text: "This is a section block with a button.",
  },
  accessory: {
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
};
