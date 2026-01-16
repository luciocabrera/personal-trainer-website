import * as stylex from '@stylexjs/stylex';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router';

import { styles } from './blog.$postId.stylex';
import './blog-post.css';

const BlogPost = () => {
  const { postId } = useParams();
  const { i18n } = useTranslation();
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setIsLoading(true);
        const lang = i18n.language === '' ? 'en' : i18n.language;
        const response = await fetch(`/blog-content/${postId}.${lang}.md`);
        if (response.ok) {
          const text = await response.text();
          setContent(text);
        }
      } catch (error: unknown) {
        console.error('Error loading blog post:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (postId !== undefined && postId !== '') {
      void loadContent();
    }
  }, [postId, i18n.language]);

  if (isLoading) {
    return (
      <div {...stylex.props(styles.container)}>
        <div {...stylex.props(styles.loading)}>Loading...</div>
      </div>
    );
  }

  // Simple markdown-to-HTML conversion
  const renderMarkdown = (markdown: string) => {
    let html = markdown;

    // Images
    html = html.replaceAll(
      /!\[(.*?)\]\((.*?)\)/g,
      '<img src="$2" alt="$1" class="blog-image" />'
    );

    // Links
    html = html.replaceAll(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

    // Headers
    html = html.replaceAll(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replaceAll(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replaceAll(/^# (.*$)/gim, '<h1>$1</h1>');

    // Bold
    html = html.replaceAll(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Italic
    html = html.replaceAll(/\*(.+?)\*/g, '<em>$1</em>');

    // Horizontal rules (must be before paragraphs)
    html = html.replaceAll(/^---$/gm, '<hr />');

    // Lists - wrap consecutive <li> elements in <ul>
    html = html.replaceAll(/^- (.+)$/gim, '<li>$1</li>');
    html = html.replaceAll(/((?:<li>.*?<\/li>\n?)+)/g, '<ul>$1</ul>');

    // Paragraphs
    html = html.replaceAll('\n\n', '</p><p>');
    html = `<p>${html}</p>`;

    return html;
  };

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
          dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
        />
      </div>
    </article>
  );
};

export default BlogPost;
