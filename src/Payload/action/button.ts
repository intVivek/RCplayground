export const actionWithButtonDefault = {
  type: "actions",
  elements: [
    {
      type: "button",
      text: {
        type: "plain_text",
        text: "Click Me",
        emoji: true,
      },
    },
  ],
};

export const actionWithButtonPrimary = {
  type: "actions",
  elements: [
    {
      type: "button",
      text: {
        type: "plain_text",
        text: "Click Me",
        emoji: true,
      },
      style: "primary",
    },
  ],
};

export const actionWithButtonDanger = {
  type: "actions",
  elements: [
    {
      type: "button",
      text: {
        type: "plain_text",
        text: "Click Me",
        emoji: true,
      },
      style: "danger",
    },
  ],
};

export const actionWithButtonAsLink = {
  type: "actions",
  elements: [
    {
      type: "button",
      text: {
        type: "plain_text",
        text: "Click Me",
        emoji: true,
      },
      url: "https://rocket.chat",
    },
  ],
};
