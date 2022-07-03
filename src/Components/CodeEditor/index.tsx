import { basicSetup } from "@codemirror/basic-setup";
import { lineNumbers } from "@codemirror/gutter";
import { javascript } from "@codemirror/lang-javascript";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { Box } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React, { useEffect, useRef } from "react";

import theme from "./theme";

const CodeEditor: FC = () => {
  const editor = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const state: EditorState = EditorState.create({
      doc: "",
      extensions: [
        basicSetup,
        javascript(),
        EditorView.lineWrapping,
        lineNumbers(),
        ...theme,
      ],
    });

    const view: EditorView = new EditorView({
      state,
      parent: editor.current,
    });
    return () => {
      view.destroy();
    };
  }, []);

  return <Box minHeight={"100%"} display="grid" ref={editor} />;
};

export default CodeEditor;
