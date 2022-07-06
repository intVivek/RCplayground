import { json } from "@codemirror/lang-json";
import { lineNumbers, EditorView } from "@codemirror/view";

import highlightStyle from "./HighlightStyle";
import theme from "./theme";

const extensions = [
  highlightStyle,
  EditorView.lineWrapping,
  lineNumbers(),
  json(),
  ...theme,
];

export default extensions;
