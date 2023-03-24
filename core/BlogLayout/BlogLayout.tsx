import Layout from '../Layout/index';
import { Post } from '@/types/post';
import { Grid } from '@/design_system/index';
import { Hero } from '../components/Hero/Hero';

interface Props {
  children: React.ReactNode;
  frontMatter: Post;
}

const BlogLayout = ({ children, frontMatter }: Props) => {
  const { date, title, lastUpdated } = frontMatter;
  return (
    <Layout footer>
      <Grid column="1fr minmax(auto,70ch) 1fr" gap="16px">
        <Hero title={title} date={date} lastUpdated={lastUpdated} />
        <article>{children}</article>
      </Grid>
    </Layout>
  );
};

export default BlogLayout;
