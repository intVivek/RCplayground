import { javascript } from "@codemirror/lang-javascript";
import { EditorState } from "@codemirror/state";
import type { Extension } from "@codemirror/state";
import { basicSetup, EditorView } from "codemirror";
import { useCallback, useEffect, useState, useRef } from "react";

export default function useCodeMirror(extensions: Extension[]) {
  const [element, setElement] = useState<HTMLElement>();
  const view = useRef<EditorView>();
  const [value, setValue] = useState<string | undefined>("");

  const editor = useCallback((node: HTMLElement | null) => {
    if (!node) return;

    setElement(node);
  }, []);

  const update = useCallback(
    (update: { docChanged: boolean }) => {
      if (update.docChanged) {
        setValue(view.current?.state?.doc.toString());
      }
    },
    [value, view]
  );

  const updateListenerExtension = EditorView.updateListener.of(update);

  useEffect(() => {
    if (!element) return;

    view.current = new EditorView({
      state: EditorState.create({
        extensions: [
          basicSetup,
          javascript(),
          updateListenerExtension,
          ...extensions,
        ],
      }),
      parent: element,
    });

    return () => view.current?.destroy();
  }, [element]);

  return { editor, value };
}
