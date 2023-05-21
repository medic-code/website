import UnderlineAnchorProps from '@/design_system/Anchor/Anchor.types';
import {
  Anchor,
  Typography,
  Button,
  fontSizes,
  List,
  Pill,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
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
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  Button,
  Image: MDXImage,
  ol: function OL(props: ListTypes) {
    return <List variant="ordered" {...props} />;
  },
  ul: function UL(props: ListTypes) {
    return <List {...props} />;
  },
  Pill,
};

export default MDXComponents;
