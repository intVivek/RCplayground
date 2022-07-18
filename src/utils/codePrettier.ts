import prettier from "prettier";
import pluginBabel from "prettier/parser-babel";

const codePrettier = (code: string, cursor: any) =>
  prettier.formatWithCursor(code, {
    parser: "json5",
    plugins: [pluginBabel],
    tabWidth: 4,
    useTabs: true,
    cursorOffset: cursor,
  });

export default codePrettier;
