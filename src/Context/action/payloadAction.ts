import type { LayoutBlock } from "@rocket.chat/ui-kit";

type action = {
  type: string;
  payload: readonly LayoutBlock[];
};

export const payloadAction = (payload: readonly LayoutBlock[]): action => ({
  type: "payload",
  payload,
});
