import prettier from "prettier";
import pluginBabel from "prettier/parser-babel";

const codePrettier = (code: string, cursor: any) =>
  prettier.formatWithCursor(code, {
    parser: "babel",
    plugins: [pluginBabel],
    tabWidth: 4,
    useTabs: false,
    cursorOffset: cursor,
  });

export default codePrettier;
