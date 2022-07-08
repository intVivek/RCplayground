import type { Extension } from "@codemirror/state";
import { Box } from "@rocket.chat/fuselage";
// import { useDebouncedValue } from "@rocket.chat/fuselage-hooks";
// import type { LayoutBlock } from "@rocket.chat/ui-kit";
// import beautify from "js-beautify";
import { useEffect, useContext } from "react";

import { context } from "../../Context";
import useCodeMirror from "../../hooks/useCodeMirror";

type CodeMirrorProps = {
  extensions?: Extension[];
};

const CodeEditor = ({ extensions }: CodeMirrorProps) => {
  const { editor, setValue } = useCodeMirror(extensions || []);
  const { state } = useContext(context);

  // const debounceValue = useDebouncedValue(changes?.value, 500);

  // useEffect(() => {
  //   if (!changes?.isFlush) {
  //     // setValue(changes?.value);
  //     try {
  //       const val = JSON.parse(changes.value);
  //       if(val is LayoutBlock){
  //       }
  //     } catch (e) {}
  //   }
  // }, [debounceValue]);
  // const [code, setCode] = useState(
  //   `{"blocks":[{"type":"divider"},{"type":"divider"}]}`
  // );

  // const formatCode = () => {
  //   const formattedCode = beautify(code, {
  //     indent_size: "4",
  //     indent_char: " ",
  //     max_preserve_newlines: "5",
  //     preserve_newlines: true,
  //     keep_array_indentation: true,
  //     break_chained_methods: false,
  //     indent_scripts: "normal",
  //     space_before_conditional: true,
  //     unescape_strings: false,
  //     jslint_happy: false,
  //     end_with_newline: false,
  //     wrap_line_length: "80",
  //     indent_inner_html: true,
  //     comma_first: false,
  //     e4x: false,
  //     brace_style: "end-expand",
  //   });

  //   setCode(formattedCode);
  // };

  // const getValueHandler = () => {
  //   console.log(value);
  // };

  // const setValueHandler = () => {
  // };

  useEffect(() => {
    setValue(JSON.stringify(state.payload, undefined, 4));
  }, [state.payload]);

  return (
    <>
      {/* <button onClick={getValueHandler}>getValue</button>
      <button onClick={setValueHandler}>SetValue</button> */}
      <Box minHeight={"100%"} display="grid" ref={editor} />
    </>
  );
};

export default CodeEditor;
