export const sectionWithdatePicker = {
  type: "section",
  text: {
    type: "mrkdwn",
    text: "Pick a date for the deadline.",
  },
  accessory: {
    type: "datepicker",
    initialDate: "1990-04-28",
    placeholder: {
      type: "plain_text",
      text: "Select a date",
      emoji: true,
    },
  },
};
