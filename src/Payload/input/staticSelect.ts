export const inputWithSingleStaticSelect = {
  type: "input",
  element: {
    type: "static_select",
    actionId: "overflow_1",
    initialValue: "option_2",
    options: [
      {
        value: "option_1",
        text: {
          type: "plain_text",
          text: "lorem ipsum 🚀",
          emoji: true,
        },
      },
      {
        value: "option_2",
        text: {
          type: "plain_text",
          text: "lorem ipsum 🚀",
          emoji: true,
        },
      },
    ],
    placeholder: {
      type: "plain_text",
      text: "Select an item",
    },
  },
  label: {
    type: "plain_text",
    text: "Label",
    emoji: true,
  },
};

export const inputWithMultiStaticSelect = {
  type: "input",
  element: {
    type: "multi_static_select",
    actionId: "overflow_1",
    initialValue: ["option_1", "option_2"],
    options: [
      {
        value: "option_1",
        text: {
          type: "plain_text",
          text: "lorem ipsum 🚀",
          emoji: true,
        },
      },
      {
        value: "option_2",
        text: {
          type: "plain_text",
          text: "lorem ipsum 🚀",
          emoji: true,
        },
      },
    ],
    placeholder: {
      type: "plain_text",
      text: "Select an item",
    },
  },
  label: {
    type: "plain_text",
    text: "Label",
    emoji: true,
  },
};
