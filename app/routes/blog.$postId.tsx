import * as stylex from '@stylexjs/stylex';
import { Link, useLoaderData } from 'react-router';

import { renderMarkdown } from '@/utils/renderMarkdown.util';

import type { BlogPostLoaderData } from './blog.$postId.loader';

import { styles } from './blog.$postId.stylex';
import './blog-post.css';

// Re-export loader for React Router
export { loader } from './blog.$postId.loader';

const BlogPost = () => {
  const { content, isError } = useLoaderData<BlogPostLoaderData>();

  if (isError) {
    return (
      <div {...stylex.props(styles.container)}>
        <div {...stylex.props(styles.content)}>
          <Link
            to='/blog'
            {...stylex.props(styles.backLink)}
          >
            ← Back to Blog
          </Link>
          <div {...stylex.props(styles.loading)}>Blog post not found.</div>
        </div>
      </div>
    );
  }

  return (
    <article {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.content)}>
        <Link
          to='/blog'
          {...stylex.props(styles.backLink)}
        >
          ← Back to Blog
        </Link>
        <div
          className='markdown'
          {...stylex.props(styles.markdown)}
          // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml -- Required for rendering markdown content
          dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
        />
      </div>
    </article>
  );
};

export default BlogPost;
