export const plainText = {
  type: "section",
  text: {
    type: "plain_text",
    text: "This is a plain text section block.",
    emoji: true,
  },
};

export const mrkdwn = {
  type: "section",
  text: {
    type: "mrkdwn",
    text: "This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>",
  },
};

export const textFields = {
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
