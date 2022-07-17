import type { Extension } from "@codemirror/state";
import { Box } from "@rocket.chat/fuselage";
import { useDebouncedValue } from "@rocket.chat/fuselage-hooks";
import json5 from "json5";
import { useEffect, useContext } from "react";

import { payloadAction, context } from "../../Context";
import useCodeMirror from "../../hooks/useCodeMirror";
import codeBeautify from "../../utils/codeBeautify";
import codePrettier from "../../utils/codePrettier";

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
      console.log(changes.value);
      try {
        const parsedCode = json5.parse(changes.value);
        dispatch(payloadAction(parsedCode));
      } catch (e) {
        console.log(e);
        // do nothing;
      } finally {
        setValue(codePrettier(changes.value, 11).formatted.replaceAll(";", ""));
      }
    }
  }, [debounceValue]);

  useEffect(() => {
    setValue(
      codePrettier(
        JSON.stringify(state.payload, undefined, 4),
        11
      ).formatted.replaceAll(";", "")
    );
  }, [state.payload]);

  return (
    <>
      <Box display="grid" height="100%" width={"100%"} ref={editor} />
    </>
  );
};

export default CodeEditor;
