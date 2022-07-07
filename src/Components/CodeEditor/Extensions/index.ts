import { javascript } from "@codemirror/lang-javascript";
import { lineNumbers, EditorView } from "@codemirror/view";

import highlightStyle from "./HighlightStyle";
import basicSetup from "./basicSetup";
import theme from "./theme";

const extensions = [
  highlightStyle,
  EditorView.lineWrapping,
  lineNumbers(),
  javascript(),
  basicSetup,
  ...theme,
];

export default extensions;
