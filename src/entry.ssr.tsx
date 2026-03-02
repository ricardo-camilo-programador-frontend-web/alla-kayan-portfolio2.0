import { renderToStream, type RenderToStreamOptions } from '@builder.io/qwik/server';
import root from './root';

export default function (opts: RenderToStreamOptions) {
  return renderToStream(<root />, {
    ...opts,
    containerAttributes: {
      lang: 'pt-BR',
      ...opts.containerAttributes,
    },
  });
}
