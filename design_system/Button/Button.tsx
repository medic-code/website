import React, { forwardRef } from 'react';
import StyledButton from './Button.styles';
import ButtonProps from './Button.types';

const Button = function Button(props: ButtonProps) {
  const { children, ...rest } = props;

  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
