import {
  Anchor,
  Typography,
  Button,
  fontSizes,
  List,
} from '@/design_system/index';
import MDXImage from './Image';

const MDXComponents = {
  a: function A(props) {
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
  h3: function H3(props) {
    return (
      <Typography
        {...props}
        modifiers="heading3"
        size={fontSizes['--header3']}
      />
    );
  },
  Button,
  Image: MDXImage,
  ol: function OL(props) {
    return <List variant="ordered" {...props} />;
  },
  ul: function UL(props) {
    return <List {...props} />;
  },
};

export default MDXComponents;
