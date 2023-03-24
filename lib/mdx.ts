import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkSlug from 'remark-slug';
import rehypeAutolinkHeadings from 'remark-autolink-headings';
import rehypeMeta from 'rehype-meta';

const root = process.cwd();

export const getFiles = async () => {
  return fs.readdirSync(path.join(root, 'content'));
};

export const getFileBySlug = async (slug: string) => {
  const source = fs.readFileSync(
    path.join(root, 'content', `${slug}.mdx`),
    'utf8'
  );

  const parsedFile = matter(source);

  const data = parsedFile.data;
  const content = parsedFile.content;

  const mdxSource = await serialize(content);
  const result = {
    mdxSource,
    frontMatter: { ...data },
  };

  return result;
};

export const getAllFilesFrontMatter = async () => {
  const files = fs.readdirSync(path.join(root, 'content'));
  const posts = files
    .map((postSlug) => {
      const source = fs.readFileSync(
        path.join(root, 'content', postSlug),
        'utf8'
      );

      const parsedFile = matter(source);
      return parsedFile.data;
    })
    .sort((post1, post2) => (post1.date > post2.data ? 1 : -1));
  return posts;
};
