import type { Extension } from "@codemirror/state";
import { Box } from "@rocket.chat/fuselage";

import useCodeMirror from "../../hooks/useCodeMirror";

type CodeMirrorProps = {
  extensions?: Extension[];
};

const CodeEditor = ({ extensions }: CodeMirrorProps) => {
  const { editor, value, setValue } = useCodeMirror(extensions || []);

  const getValueHandler = () => {
    console.log(value);
  };

  const setValueHandler = () => {
    setValue("asdasdasd");
  };

  return (
    <>
      <button onClick={getValueHandler}>getValue</button>
      <button onClick={setValueHandler}>SetValue</button>
      <Box minHeight={"100%"} display="grid" ref={editor} />
    </>
  );
};

export default CodeEditor;
