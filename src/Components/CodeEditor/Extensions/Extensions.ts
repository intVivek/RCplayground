import { json } from "@codemirror/lang-json";

import highlightStyle from "./HighlightStyle";
import basicSetup from "./basicSetup";
import jsonLinter from "./jsonLinter";
// import payloadLinter from "./payloadLinter";
import theme from "./theme";

export const actionBlockExtensions = [
  highlightStyle,
  json(),
  jsonLinter,
  basicSetup,
  // payloadLinter,
  ...theme,
];

export const actionPreviewExtensions = [
  highlightStyle,
  json(),
  basicSetup,
  ...theme,
];
