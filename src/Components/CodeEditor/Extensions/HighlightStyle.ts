import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { tags as t } from "@lezer/highlight";

const highLightStyle = () => {
  const style = HighlightStyle.define([
    { tag: t.definition(t.propertyName), color: "#da2525" },
    { tag: t.literal, color: "var(--RCPG-primary-color)" },
  ]);

  return syntaxHighlighting(style);
};

export default highLightStyle();
