// import { HighlightStyle } from "@codemirror/language";
import type { Extension } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
// import { tags, highlightTree } from "@lezer/highlight";

const gutters: Extension = EditorView.theme({
  ".cm-gutters": {
    backgroundColor: "transparent",
    border: "none",
    userSelect: "none",
    minWidth: "32px",
    display: "flex",
    justifyContent: "flex-end",
  },
});

// const textHighlight = highlightTree.define([
//   { tag: tags.keyword, color: "#fc6" },
//   { tag: tags.comment, color: "#f5d", fontStyle: "italic" },
// ]);

// const mtheme = EditorView.theme({
//   ".cm-activeLine": {
//     backgroundColor: "blue",
//   },
//   ".cm-content": {
//     height: "300px",
//   },
//   ".cm-scroller": {
//     overflow: "hidden",
//   },
//   ".cm-wrap": {
//     height: "300px",
//     border: "1px solid silver",
//   },
// });

export default [gutters] as const;
