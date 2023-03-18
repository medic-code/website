import UnderlineAnchorProps from '@/design_system/Anchor/Anchor.types';
import {
  Anchor,
  Typography,
  Button,
  fontSizes,
  List,
  Pill,
} from '@/design_system/index';
import MDXImage from './Image';
import { ListTypes } from '@/design_system/List/types';

const MDXComponents = {
  a: function A(props: UnderlineAnchorProps) {
    return <Anchor {...props} />;
  },
  p: function P(props: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
      <Typography
        {...props}
        modifiers="paragraph"
        size={fontSizes['--paragraph']}
      />
    );
  },
  h1: function H1(props: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
      <Typography
        {...props}
        modifiers="heading1"
        size={fontSizes['--header1']}
      />
    );
  },
  h2: function H2(props: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
      <Typography
        {...props}
        modifiers="heading2"
        size={fontSizes['--header2']}
      />
    );
  },
  h3: function H3(props: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
      <Typography
        {...props}
        modifiers="heading3"
        size={fontSizes['--header3']}
      />
    );
  },
  h4: function H4(props: React.HTMLAttributes<HTMLHeadingElement>) {
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
  ol: function OL(props: ListTypes) {
    return <List {...props} />;
  },
  ul: function UL(props: ListTypes) {
    return <List {...props} />;
  },
  Pill,
};

export default MDXComponents;
