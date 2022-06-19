export const sectionWithMenu = {
  type: "section",
  text: {
    type: "mrkdwn",
    text: "This is a section block with an overflow menu.",
  },
  accessory: {
    type: "overflow",
    options: [
      {
        text: {
          type: "plain_text",
          text: "*this is plain_text text*",
          emoji: true,
        },
        value: "value-0",
      },
      {
        text: {
          type: "plain_text",
          text: "*this is plain_text text*",
          emoji: true,
        },
        value: "value-1",
      },
      {
        text: {
          type: "plain_text",
          text: "*this is plain_text text*",
          emoji: true,
        },
        value: "value-2",
      },
      {
        text: {
          type: "plain_text",
          text: "*this is plain_text text*",
          emoji: true,
        },
        value: "value-3",
      },
      {
        text: {
          type: "plain_text",
          text: "*this is plain_text text*",
          emoji: true,
        },
        value: "value-4",
      },
    ],
  },
};
