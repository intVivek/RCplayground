import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { tags as t } from "@lezer/highlight";

const highLightStyle = () => {
  const style = HighlightStyle.define([
    { tag: t.definition(t.propertyName), color: "#da2525" },
    { tag: t.literal, color: "#f5455c" },
    { tag: t.separator, color: "#35d440" },
    { tag: t.content, color: "#35d440" },
  ]);

  return syntaxHighlighting(style);
};

export default highLightStyle();
