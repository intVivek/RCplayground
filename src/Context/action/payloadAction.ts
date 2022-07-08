import type { LayoutBlock } from "@rocket.chat/ui-kit";

type action = {
  type: string;
  payload: LayoutBlock[];
};

export const payloadAction = (payload: LayoutBlock[]): action => ({
  type: "payload",
  payload,
});
