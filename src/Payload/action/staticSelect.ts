export const actionWithSingleStaticSelect = {
  type: "actions",
  elements: [
    {
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
  ],
};

export const actionWithMultiStaticSelect = {
  type: "actions",
  elements: [
    {
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
  ],
};
