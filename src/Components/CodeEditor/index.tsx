// import { EditorState } from "@codemirror/state";
import type { Extension } from "@codemirror/state";
import { Box } from "@rocket.chat/fuselage";
import { useEffect } from "react";
// import React, { useEffect, useRef, useState } from "react";

// import { extensions } from "./Extensions";

// const CodeEditor: FC = () => {
//   const editor = useRef() as React.MutableRefObject<HTMLInputElement>;
//   const [state] = useState<EditorState>(
//     EditorState.create({
//       extensions,
//     })
//   );

//   useEffect(() => {
//     const view: EditorView = new EditorView({
//       state,
//       doc: '[{"type": "divider"},{"type": "divider"}]',
//       parent: editor.current,
//     });

//     return () => {
//       view.destroy();
//     };
//   }, []);

//   const clickHandler = () => {
//     // console.log(state.doc);
//     // state.replaceSelection("dfgdg");
//     state.update({
//       changes: { from: 0, to: state.doc.length, insert: "foobar" },
//     });
//   };

//   return (
//     <>
//       <button onClick={clickHandler}>click</button>
//       <Box minHeight={"100%"} display="grid" ref={editor} />
//     </>
//   );
// };

// export default CodeEditor;

import useCodeMirror from "../../hooks/useCodeMirror";

type CodeMirrorProps = {
  extensions: Extension[];
};

const CodeEditor = ({ extensions }: CodeMirrorProps) => {
  const { editor, value } = useCodeMirror(extensions);
  const clickHandler = () => {
    console.log(value);
    // state.replaceSelection("dfgdg");
    // ref.update({
    //   changes: { from: 0, to: state.doc.length, insert: "foobar" },
    // });
  };
  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <>
      <button onClick={clickHandler}>click</button>
      <Box minHeight={"100%"} display="grid" ref={editor} />
    </>
  );
};

export default CodeEditor;
