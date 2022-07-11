import type { Extension } from "@codemirror/state";
import { Box } from "@rocket.chat/fuselage";
import { useDebouncedValue } from "@rocket.chat/fuselage-hooks";
import { useEffect, useContext } from "react";

import { payloadAction, context } from "../../Context";
import useCodeBeautify from "../../hooks/useCodeBeautify";
import useCodeMirror from "../../hooks/useCodeMirror";

type CodeMirrorProps = {
  extensions?: Extension[];
};

const CodeEditor = ({ extensions }: CodeMirrorProps) => {
  const { editor, changes, setValue } = useCodeMirror(extensions || []);
  const { state, dispatch } = useContext(context);
  const { formattedCode } = useCodeBeautify(state.payload);

  const debounceValue = useDebouncedValue(changes?.value, 500);

  useEffect(() => {
    if (!changes?.isFlush) {
      if (typeof changes.value === "object") {
        dispatch(payloadAction(changes.value));
      }
    }
  }, [debounceValue]);

  useEffect(() => {
    setValue(formattedCode);
  }, [formattedCode]);

  return (
    <>
      <Box ref={editor} />
    </>
  );
};

export default CodeEditor;
