import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router';
import * as stylex from '@stylexjs/stylex';

import { styles } from './blog.$postId.stylex';

import './blog-post.css';

const BlogPost = () => {
  const { postId } = useParams();
  const { i18n } = useTranslation();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        const lang = i18n.language !== '' ? i18n.language : 'en';
        const response = await fetch(`/blog-content/${postId}.${lang}.md`);
        if (response.ok) {
          const text = await response.text();
          setContent(text);
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    if (postId !== undefined && postId !== '') {
      void loadContent();
    }
  }, [postId, i18n.language]);

  if (loading) {
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
    html = html.replace(
      /!\[(.*?)\]\((.*?)\)/g,
      '<img src="$2" alt="$1" class="blog-image" />'
    );

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Bold
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

    // Lists
    html = html.replace(/^- (.+)$/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

    // Paragraphs
    html = html.replace(/\n\n/g, '</p><p>');
    html = `<p>${html}</p>`;

    // Horizontal rules
    html = html.replace(/^---$/gm, '<hr />');

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
