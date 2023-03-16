import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';

import { getFiles, getFileBySlug } from '@/lib/mdx';
import MDXComponents from '@/core/components/MDX/MDXComponents';
import BlogLayout from '@/core/BlogLayout/index';

const Blog = ({ post }) => {
  const { isFallback } = useRouter();

  if (isFallback || !post) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <BlogLayout frontMatter={post.frontMatter}>
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

export const getStaticProps = async ({ params }) => {
  try {
    const post = await getFileBySlug(params.slug);
    return { props: { post } };
  } catch (error) {
    return { notFound: true };
  }
};
