import { render, type RenderOptions } from '@builder.io/qwik';
import root from './root';

export default function (document: Document) {
  return render(document, <root />);
}
