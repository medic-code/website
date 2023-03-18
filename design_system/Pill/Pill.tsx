import { HTMLAttributes } from 'react';
import { StyledPill } from './styles';

const Pill = (props: HTMLAttributes<HTMLDivElement>) => {
  const { children } = props;
  return (
    <>
      <StyledPill>{children}</StyledPill>
    </>
  );
};

export default Pill;
