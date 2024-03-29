import type { Diagnostic } from '@codemirror/lint';
import type { EditorView } from 'codemirror';

const parsePayload = (
  head: any,
  Diagnostic: Diagnostic[],
  view: EditorView
) => {
  const payload = JSON.parse(
    view.state.doc.toString().slice(head.from, head.to)
  );
  payload && 1;
};

export default parsePayload;
