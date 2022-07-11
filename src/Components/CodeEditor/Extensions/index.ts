import { json, jsonParseLinter } from "@codemirror/lang-json";
import { linter } from "@codemirror/lint";
import { EditorView } from "@codemirror/view";

import highlightStyle from "./HighlightStyle";
import basicSetup from "./basicSetup";
import theme from "./theme";

const linterExtension = linter(jsonParseLinter());

const extensions = [
  highlightStyle,
  EditorView.lineWrapping,
  json(),
  basicSetup,
  linterExtension,
  ...theme,
];

export default extensions;
