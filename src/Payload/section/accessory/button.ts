export const sectionButtonDefault = {
  type: "section",
  text: {
    type: "mrkdwn",
    text: "This is a section block with a button.",
  },
  accessory: {
    type: "button",
    text: {
      type: "plain_text",
      text: "Click Me",
      emoji: true,
    },
  },
};

export const sectionButtonPrimary = {
  type: "section",
  text: {
    type: "mrkdwn",
    text: "This is a section block with a button.",
  },
  accessory: {
    type: "button",
    text: {
      type: "plain_text",
      text: "Click Me",
      emoji: true,
    },
    style: "primary",
  },
};

export const sectionButtonDanger = {
  type: "section",
  text: {
    type: "mrkdwn",
    text: "This is a section block with a button.",
  },
  accessory: {
    type: "button",
    text: {
      type: "plain_text",
      text: "Click Me",
      emoji: true,
    },
    style: "danger",
  },
};

export const sectionButtonAsLink = {
  type: "section",
  text: {
    type: "mrkdwn",
    text: "This is a section block with a button.",
  },
  accessory: {
    type: "button",
    text: {
      type: "plain_text",
      text: "Click Me",
      emoji: true,
    },
    url: "https://rocket.chat",
  },
};
