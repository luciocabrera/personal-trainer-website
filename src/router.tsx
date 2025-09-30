import { createHashRouter, type RouteObject } from 'react-router-dom';
import { RootLayout } from './components/layouts/RootLayout';
import { HomePage } from './pages/HomePage';
import { ErrorPage } from './pages/ErrorPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // Hash-based routes for smooth section navigation
      {
        path: 'hero',
        element: <HomePage />,
      },
      {
        path: 'trainings',
        element: <HomePage />,
      },
      {
        path: 'schedule',
        element: <HomePage />,
      },
      {
        path: 'pricing',
        element: <HomePage />,
      },
      {
        path: 'signup',
        element: <HomePage />,
      },
    ],
  },
];

// Using createHashRouter for smooth section navigation
export const router = createHashRouter(routes);