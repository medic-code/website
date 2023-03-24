import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Post = {
  date: string;
  slug: string;
  title: string;
  subtitle: string;
  type: string;
  lastUpdated: string;
  keywords?: string[];
  categories?: string[];
};

export type getFilePost = {
  post: FrontMatterPost;
};

export type FrontMatterPost = {
  frontMatter: Post;
  mdxSource: MDXRemoteSerializeResult;
};
