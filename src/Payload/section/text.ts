import type { LayoutBlock } from "@rocket.chat/ui-kit";

export const sectionWithPlainText: LayoutBlock = {
  type: "section",
  text: {
    type: "plain_text",
    text: "This is a plain text section block.",
    emoji: true,
  },
};

export const sectionWithMrkdwn: LayoutBlock = {
  type: "section",
  text: {
    type: "mrkdwn",
    text: "This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>",
  },
};

export const sectionWithTextFields: LayoutBlock = {
  type: "section",
  fields: [
    {
      type: "plain_text",
      text: "*this is plain_text text*",
      emoji: true,
    },
    {
      type: "plain_text",
      text: "*this is plain_text text*",
      emoji: true,
    },
    {
      type: "plain_text",
      text: "*this is plain_text text*",
      emoji: true,
    },
    {
      type: "plain_text",
      text: "*this is plain_text text*",
      emoji: true,
    },
    {
      type: "plain_text",
      text: "*this is plain_text text*",
      emoji: true,
    },
  ],
};
