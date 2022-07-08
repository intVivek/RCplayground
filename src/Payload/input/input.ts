import type { LayoutBlock } from "@rocket.chat/ui-kit";

export const inputWithSingleLineInput: LayoutBlock = {
  type: "input",
  element: {
    type: "plain_text_input",
    appId: "dummy-app-id",
    blockId: "dummy-block-id",
    actionId: "dummy-action-id",
    placeholder: {
      type: "plain_text",
      text: "Enter name",
      emoji: true,
    },
    initialValue: "Vivek Srivastava",
    multiline: false,
  },
  label: {
    type: "plain_text",
    text: "Label",
    emoji: true,
  },
};

export const inputWithMultiLineInput: LayoutBlock = {
  type: "input",
  element: {
    type: "plain_text_input",
    appId: "dummy-app-id",
    blockId: "dummy-block-id",
    actionId: "dummy-action-id",
    placeholder: {
      type: "plain_text",
      text: "Enter name",
      emoji: true,
    },
    initialValue: "Vivek Srivastava",
    multiline: true,
  },
  label: {
    type: "plain_text",
    text: "Label",
    emoji: true,
  },
};
