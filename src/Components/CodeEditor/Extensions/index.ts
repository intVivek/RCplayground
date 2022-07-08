import { javascript } from "@codemirror/lang-javascript";
import { EditorView } from "@codemirror/view";

import highlightStyle from "./HighlightStyle";
import basicSetup from "./basicSetup";
import theme from "./theme";

const extensions = [
  highlightStyle,
  EditorView.lineWrapping,
  javascript(),
  basicSetup,
  ...theme,
];

export default extensions;
