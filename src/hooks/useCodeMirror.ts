import { javascript } from "@codemirror/lang-javascript";
import { EditorState } from "@codemirror/state";
import type { Extension } from "@codemirror/state";
import { EditorView } from "codemirror";
import { useCallback, useEffect, useState, useRef } from "react";

export default function useCodeMirror(extensions: Extension[]) {
  const view = useRef<EditorView>();
  const [element, setElement] = useState<HTMLElement>();
  const [value, setVal] = useState<string | undefined>("");

  const editor = useCallback((node: HTMLElement | null) => {
    if (!node) return;

    setElement(node);
  }, []);

  const update = useCallback(
    (update: { docChanged: boolean }) => {
      if (update.docChanged) {
        setVal(view.current?.state?.doc.toString());
      }
    },
    [value, view]
  );

  const updateListenerExtension = EditorView.updateListener.of(update);

  const setValue = (value?: string, from?: number, to?: number) => {
    view.current?.dispatch({
      changes: {
        from: from || 0,
        to: to || view.current?.state.doc.length,
        insert: value || "",
      },
    });
  };

  useEffect(() => {
    if (!element) return;

    view.current = new EditorView({
      state: EditorState.create({
        extensions: [updateListenerExtension, javascript(), ...extensions],
      }),
      parent: element,
    });

    return () => view.current?.destroy();
  }, [element]);

  return { editor, value, setValue };
}
