import { StyledPill } from './styles';

const Pill = (props) => {
  const { children } = props;
  return (
    <>
      <StyledPill>{children}</StyledPill>
    </>
  );
};

export default Pill;
