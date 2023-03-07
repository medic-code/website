import React, { forwardRef } from 'react';

import StyledText from './Typography.styles';
import TextProps from './Typography.types';

const Text = function Text(props: TextProps) {
  const { children, modifiers, ...rest } = props;

  return (
    <StyledText modifiers={modifiers} {...rest}>
      {children}
    </StyledText>
  );
};

export default Text;
