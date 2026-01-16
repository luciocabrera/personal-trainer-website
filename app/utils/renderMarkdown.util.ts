/**
 * Simple markdown-to-HTML conversion
 */
export const renderMarkdown = (markdown: string) => {
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
