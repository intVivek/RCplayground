import type { Extension } from "@codemirror/state";
import { Box } from "@rocket.chat/fuselage";
import { useDebouncedValue } from "@rocket.chat/fuselage-hooks";
import { useEffect, useContext } from "react";

import { payloadAction, context } from "../../Context";
import useCodeMirror from "../../hooks/useCodeMirror";
import codeBeautify from "../../utils/codeBeautify";

type CodeMirrorProps = {
  extensions?: Extension[];
};

const CodeEditor = ({ extensions }: CodeMirrorProps) => {
  const { state, dispatch } = useContext(context);
  const { editor, changes, setValue } = useCodeMirror(
    extensions,
    codeBeautify(JSON.stringify(state.payload, undefined, 4))
  );
  const debounceValue = useDebouncedValue(changes?.value, 1500);

  useEffect(() => {
    if (!changes?.isFlush) {
      setValue(codeBeautify(changes.value));
      try {
        const parsedCode = JSON.parse(changes.value);
        dispatch(payloadAction(parsedCode));
      } catch (e) {
        // do nothing;
      } finally {
        setValue(codeBeautify(changes.value));
      }
    }
  }, [debounceValue]);

  useEffect(() => {
    setValue(codeBeautify(JSON.stringify(state.payload, undefined, 4)));
  }, [state.payload]);

  return (
    <>
      <Box display="grid" height="100%" width={"100%"} ref={editor} />
    </>
  );
};

export default CodeEditor;
