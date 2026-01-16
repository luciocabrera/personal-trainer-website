import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import * as stylex from '@stylexjs/stylex';

import { styles } from './blog.stylex';

const Blog = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      category: t('blog.posts.outdoor_training_winter.category'),
      date: '2026-01-10',
      id: 'outdoor-training-winter',
      image:
        'https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&h=500&fit=crop',
      readTime: '5 min',
    },
    {
      category: t('blog.posts.nutrition_tips.category'),
      date: '2026-01-05',
      id: 'nutrition-tips',
      image:
        'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop',
      readTime: '7 min',
    },
    {
      category: t('blog.posts.motivation_goals.category'),
      date: '2025-12-28',
      id: 'motivation-goals',
      image:
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop',
      readTime: '6 min',
    },
  ];

  return (
    <section
      id='blog'
      {...stylex.props(styles.blogSection)}
    >
      <div {...stylex.props(styles.container)}>
        <h1 {...stylex.props(styles.title)}>{t('blog.title')}</h1>
        <p {...stylex.props(styles.subtitle)}>{t('blog.subtitle')}</p>

        <div {...stylex.props(styles.blogGrid)}>
          {blogPosts.map((post) => (
            <article
              key={post.id}
              {...stylex.props(styles.blogCard)}
            >
              <div {...stylex.props(styles.imageContainer)}>
                <img
                  alt={t(`blog.posts.${post.id.replace(/-/g, '_')}.imageAlt`)}
                  loading='lazy'
                  src={post.image}
                  {...stylex.props(styles.image)}
                />
                <div {...stylex.props(styles.category)}>{post.category}</div>
              </div>

              <div {...stylex.props(styles.content)}>
                <div {...stylex.props(styles.meta)}>
                  <span {...stylex.props(styles.date)}>{post.date}</span>
                  <span {...stylex.props(styles.readTime)}>
                    📖 {post.readTime}
                  </span>
                </div>

                <h2 {...stylex.props(styles.postTitle)}>
                  {t(`blog.posts.${post.id.replace(/-/g, '_')}.title`)}
                </h2>

                <p {...stylex.props(styles.excerpt)}>
                  {t(`blog.posts.${post.id.replace(/-/g, '_')}.excerpt`)}
                </p>

                <Link
                  to={`/blog/${post.id}`}
                  {...stylex.props(styles.readMore)}
                >
                  {t('blog.readMore')} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
