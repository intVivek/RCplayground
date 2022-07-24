import { json } from "@codemirror/lang-json";

import highlightStyle from "./HighlightStyle";
import basicSetup from "./basicSetup";
import lint from "./lint";
import theme from "./theme";

const extensions = [highlightStyle, json(), lint, basicSetup, ...theme];

export default extensions;
