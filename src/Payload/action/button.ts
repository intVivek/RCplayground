export const buttonDefault = [
  {
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
  },
] as const;

export const buttonPrimary = [
  {
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
  },
] as const;

export const buttonDanger = [
  {
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
  },
] as const;

export const buttonAsLink = [
  {
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
  },
] as const;
