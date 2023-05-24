import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
import { GetStaticProps, GetStaticPaths } from 'next';
import { NextSeo } from 'next-seo';

import { getFiles, getFileBySlug } from '@/lib/mdx';
import MDXComponents from '@/core/components/MDX/MDXComponents';
import BlogLayout from '@/core/BlogLayout/index';
import { FrontMatterPost, getFilePost } from '@/types/post';

const Blog = (props: getFilePost) => {
  const { post } = props;
  const { isFallback } = useRouter();

  if (isFallback || !post) {
    return <div>Loading....</div>;
  }
  const canonicallink = `http://www.aaron-smith.dev/posts/${post.frontMatter.slug}`;
  return (
    <div>
      <BlogLayout frontMatter={post.frontMatter}>
        <NextSeo title={post.frontMatter.title} canonical={canonicallink} />
        <MDXRemote {...post.mdxSource} components={{ ...MDXComponents }} />
      </BlogLayout>
    </div>
  );
};

export default Blog;

export const getStaticPaths = async () => {
  const posts = await getFiles();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ''),
      },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const post = await getFileBySlug(params!.slug as string);
    return { props: { post } };
  } catch (error) {
    return { notFound: true };
  }
};
