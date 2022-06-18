export const buttonDefault = {
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

export const buttonPrimary = {
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

export const buttonDanger = {
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

export const buttonAsLink = {
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
