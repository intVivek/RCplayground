import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { tags as t } from "@lezer/highlight";

const highLightStyle = () => {
  const style = HighlightStyle.define([
    { tag: t.propertyName, color: "#31c7a4" },
    { tag: t.bool, color: "var(--RCPG-tertary-color)" },
    { tag: t.number, color: "var(--RCPG-primary-color)" },
  ]);

  return syntaxHighlighting(style);
};

export default highLightStyle();
