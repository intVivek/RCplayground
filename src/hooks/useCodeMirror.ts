import { EditorState, EditorSelection } from "@codemirror/state";
import type { Extension } from "@codemirror/state";
import { EditorView } from "codemirror";
import { useCallback, useEffect, useState, useRef } from "react";

type changes = {
  value: string;
  isFlush: boolean;
};

export default function useCodeMirror(extensions?: Extension[], doc?: string) {
  const view = useRef<EditorView>();
  const [element, setElement] = useState<HTMLElement>();
  const [changes, setChanges] = useState<changes>({
    value: "[]",
    isFlush: true,
  });

  const editor = useCallback((node: HTMLElement | null) => {
    if (!node) return;

    setElement(node);
  }, []);

  const updateListener = EditorView.updateListener.of((update) => {
    if (update.docChanged) {
      setChanges({
        value: view.current?.state?.doc.toString() || "",
        isFlush: !update?.transactions[0]?.scrollIntoView || false,
      });
    }
  });

  const setValue = (value?: string, from?: number, to?: number) => {
    try {
      view.current?.dispatch({
        changes: {
          from: from || 0,
          to: to || view.current.state.doc.length,
          insert: value || "",
        },
        selection: EditorSelection.create(view.current?.state.selection.ranges),
      });
    } catch (e) {
      view.current?.dispatch({
        changes: {
          from: from || 0,
          to: to || view.current.state.doc.length,
          insert: value || "",
        },
      });
    }
  };

  useEffect(() => {
    if (!element) return;

    view.current = new EditorView({
      state: EditorState.create({
        doc: doc || "",
        extensions: [updateListener, ...(extensions || [])],
      }),
      parent: element,
    });

    return () => view.current?.destroy();
  }, [element]);

  return { editor, changes, setValue };
}
