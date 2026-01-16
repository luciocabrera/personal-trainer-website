import { isRouteErrorResponse } from 'react-router';

import type { Route } from '../+types/root';

export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps) => {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre
          style={{
            background: 'hsla(10, 50%, 50%, 0.1)',
            color: 'red',
            maxWidth: '100%',
            overflow: 'auto',
            padding: '2rem',
          }}
        >
          {stack}
        </pre>
      )}
    </main>
  );
};
