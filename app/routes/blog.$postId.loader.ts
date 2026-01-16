import type { LoaderFunctionArgs } from 'react-router';

import fs from 'node:fs/promises';
import path from 'node:path';

import { getLanguageFromRequest } from '@/utils/serverI18n.util';

export type BlogPostLoaderData = {
  content: string;
  isError: boolean;
  language: string;
  postId: string;
};

/**
 * Loader for blog post route
 * Fetches the markdown content on the server side
 */
export const loader = async ({
  params,
  request,
}: LoaderFunctionArgs): Promise<BlogPostLoaderData> => {
  const { postId } = params;

  if (!postId) {
    return {
      content: '',
      isError: true,
      language: 'nl',
      postId: '',
    };
  }

  const language = getLanguageFromRequest(request);

  try {
    // Read the markdown file from the public folder
    const filePath = path.join(
      process.cwd(),
      'public',
      'blog-content',
      `${postId}.${language}.md`
    );

    const content = await fs.readFile(filePath, 'utf8');

    return {
      content,
      isError: false,
      language,
      postId,
    };
  } catch {
    // Try fallback to default language (nl)
    try {
      const filePath = path.join(
        process.cwd(),
        'public',
        'blog-content',
        `${postId}.nl.md`
      );

      const content = await fs.readFile(filePath, 'utf8');

      return {
        content,
        isError: false,
        language: 'nl',
        postId,
      };
    } catch {
      return {
        content: '',
        isError: true,
        language,
        postId,
      };
    }
  }
};
