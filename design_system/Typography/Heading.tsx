import {
  StyledHeading1,
  StyledHeading2,
  StyledHeading3,
  StyledHeading4,
} from './Heading.styles';
import HeadingProps from './Heading.types';

const Heading1 = function Heading(props: HeadingProps) {
  const { children, modifiers, ...rest } = props;

  return (
    <StyledHeading1 modifiers={modifiers} {...rest}>
      {children}
    </StyledHeading1>
  );
};
const Heading2 = function Heading(props: HeadingProps) {
  const { children, modifiers, ...rest } = props;

  return (
    <StyledHeading2 modifiers={modifiers} {...rest}>
      {children}
    </StyledHeading2>
  );
};
const Heading3 = function Heading(props: HeadingProps) {
  const { children, modifiers, ...rest } = props;

  return (
    <StyledHeading3 modifiers={modifiers} {...rest}>
      {children}
    </StyledHeading3>
  );
};
const Heading4 = function Heading(props: HeadingProps) {
  const { children, modifiers, ...rest } = props;

  return (
    <StyledHeading4 modifiers={modifiers} {...rest}>
      {children}
    </StyledHeading4>
  );
};

export { Heading1, Heading2, Heading3, Heading4 };
