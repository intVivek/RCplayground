import type { LayoutBlock } from "@rocket.chat/ui-kit";

type action = {
  type: string;
  payload: Array<readonly LayoutBlock[]>;
};

export const payloadAction = (
  payload: Array<readonly LayoutBlock[]>
): action => ({
  type: "payload",
  payload,
});
