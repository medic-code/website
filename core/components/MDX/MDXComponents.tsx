import {
  Anchor,
  Typography,
  Button,
  fontSizes,
  List,
  Pill,
} from '@/design_system/index';
import MDXImage from './Image';

const MDXComponents = {
  a: function A(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    return <Anchor {...props} />;
  },
  p: function P(props) {
    return (
      <Typography
        {...props}
        modifiers="paragraph"
        size={fontSizes['--paragraph']}
      />
    );
  },
  h1: function H1(props) {
    return (
      <Typography
        {...props}
        modifiers="heading1"
        size={fontSizes['--header1']}
      />
    );
  },
  h2: function H2(props) {
    return (
      <Typography
        {...props}
        modifiers="heading2"
        size={fontSizes['--header2']}
      />
    );
  },
  h3: function H3(props: React.HTMLAttributes) {
    return (
      <Typography
        {...props}
        modifiers="heading3"
        size={fontSizes['--header3']}
      />
    );
  },
  h4: function H4(props: React.HTMLAttributes) {
    return (
      <Typography
        {...props}
        modifiers="heading4"
        size={fontSizes['--header4']}
      />
    );
  },
  Button,
  Image: MDXImage,
  ol: function OL(props: React.OlHTMLAttributes<HTMLOListElement>) {
    return <List variant="ordered" {...props} />;
  },
  ul: function UL(props: React.HTMLAttributes<HTMLUListElement>) {
    return <List {...props} />;
  },
  Pill,
};

export default MDXComponents;
