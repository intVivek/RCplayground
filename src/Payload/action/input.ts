export const singleLine = [
  {
    type: "actions",
    elements: [
      {
        type: "plain_text_input",
        actionId: "plain_text_input_1",
        placeholder: {
          type: "plain_text",
          text: "Enter name",
          emoji: true,
        },
        initialValue: "Vivek Srivastava",
        multiline: false,
      },
    ],
  },
] as const;

export const multiLine = [
  {
    type: "actions",
    elements: [
      {
        type: "plain_text_input",
        actionId: "plain_text_input_1",
        placeholder: {
          type: "plain_text",
          text: "Enter name",
          emoji: true,
        },
        initialValue: "Vivek Srivastava",
        multiline: true,
      },
    ],
  },
] as const;
