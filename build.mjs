import { readdir, readFile, rm, mkdir, writeFile, copyFile } from 'node:fs/promises';
import path from 'node:path';

const rootDir = process.cwd();
const contentDir = path.join(rootDir, 'content');
const distDir = path.join(rootDir, 'dist');
const cnamePath = path.join(rootDir, 'CNAME');

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

const titleFromFile = (fileName) => {
  if (fileName === 'main.md') return 'AGENTS.md';
  return fileName;
};

const slugFromFile = (fileName) => fileName.replace(/\.md$/i, '');

const splitFrontmatter = (markdown) => {
  if (!markdown.startsWith('---\n')) {
    return { frontmatter: '', body: markdown };
  }

  const closingIndex = markdown.indexOf('\n---\n', 4);
  if (closingIndex === -1) {
    return { frontmatter: '', body: markdown };
  }

  return {
    frontmatter: markdown.slice(0, closingIndex + 5),
    body: markdown.slice(closingIndex + 5),
  };
};

const htmlFromParts = ({ frontmatter, menuItems, body, title }) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<style>
html { color-scheme: dark; }
body {
  max-width: 88ch;
  margin: 24px;
  color: #fff;
  background: #000;
  font: 15px/1.55 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  white-space: pre-wrap;
  word-break: break-word;
}
a { color: inherit; text-decoration: none; }
::selection { color: #000; background: #fff; }
</style>
</head>
<body>${escapeHtml(frontmatter)}## menu

${menuItems.map((item) => `<a href="${item.route}">- [${escapeHtml(item.fileName)}](${item.route})</a>`).join('\n')}

---
${escapeHtml(body.replace(/^\n+/, ''))}</body>
</html>
`;

const files = (await readdir(contentDir))
  .filter((fileName) => fileName.endsWith('.md'))
  .sort((left, right) => {
    if (left === 'main.md') return -1;
    if (right === 'main.md') return 1;
    return left.localeCompare(right);
  });

if (!files.includes('main.md')) {
  throw new Error('content/main.md is required for the homepage.');
}

const menuItems = files.map((fileName) => {
  const slug = slugFromFile(fileName);
  return {
    fileName,
    route: fileName === 'main.md' ? '/' : `/${slug}/`,
  };
});

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

for (const fileName of files) {
  const sourcePath = path.join(contentDir, fileName);
  const markdown = await readFile(sourcePath, 'utf8');
  const { frontmatter, body } = splitFrontmatter(markdown);
  const slug = slugFromFile(fileName);
  const outputDir = path.join(distDir, slug);

  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, 'index.html'), htmlFromParts({
    frontmatter,
    menuItems,
    body,
    title: titleFromFile(fileName),
  }));
  await writeFile(path.join(outputDir, fileName), markdown);

  if (fileName === 'main.md') {
    await writeFile(path.join(distDir, 'index.html'), htmlFromParts({
      frontmatter,
      menuItems,
      body,
      title: 'AGENTS.md',
    }));
  }
}

try {
  await copyFile(cnamePath, path.join(distDir, 'CNAME'));
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
