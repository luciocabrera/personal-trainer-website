import type { RouteConfig } from '@react-router/dev/routes';

import { layout, route } from '@react-router/dev/routes';

export default [
  layout('layouts/main.tsx', [
    route('/', 'routes/home.tsx'),
    route('/blog', 'routes/blog.tsx'),
    route('/blog/:postId', 'routes/blog.$postId.tsx'),
  ]),
] satisfies RouteConfig;
