import type { AppLoadContext, EntryContext } from 'react-router';

import { createReadableStreamFromReadable } from '@react-router/node';
import { PassThrough } from 'node:stream';
import { renderToPipeableStream } from 'react-dom/server';
import { ServerRouter } from 'react-router';

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
  // This is ignored so we can keep it here to match the expected signature
  _loadContext: AppLoadContext
) {
  return new Promise((resolve, reject) => {
    const { abort, pipe } = renderToPipeableStream(
      <ServerRouter
        context={routerContext}
        url={request.url}
      />,
      {
        onError(error: unknown) {
          console.error(error);
          responseStatusCode = 500;
        },
        onShellError(error: unknown) {
          reject(error instanceof Error ? error : new Error(String(error)));
        },
        onShellReady() {
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          responseHeaders.set('Content-Type', 'text/html');
          responseHeaders.delete('Expires');
          responseHeaders.delete('Pragma');

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          );

          pipe(body);
        },
      }
    );

    setTimeout(abort, 10_000);
  });
}
