import React, { forwardRef } from 'react';

import StyledAnchor from './Anchor.styles';
import UnderlineAnchorProps from './Anchor.types';

const Anchor = function Anchor(props: UnderlineAnchorProps) {
  const { children, modifiers, ...rest } = props;

  return <StyledAnchor {...rest}>{children}</StyledAnchor>;
};

export default Anchor;
