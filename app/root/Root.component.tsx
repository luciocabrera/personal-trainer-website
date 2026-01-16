import { Outlet, useLoaderData } from 'react-router';

import { LanguageProvider } from '@/contexts/LanguageContext';

import type { loader } from './root.loader';

export const Root = () => {
  const { language } = useLoaderData<typeof loader>();

  return (
    <LanguageProvider defaultLanguage={language} initialLanguage={language}>
      <Outlet />
    </LanguageProvider>
  );
};
