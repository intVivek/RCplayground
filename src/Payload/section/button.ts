export const sectionWithButtonDefault = {
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

export const sectionWithButtonPrimary = {
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

export const sectionWithButtonDanger = {
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

export const sectionWithButtonAsLink = {
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
