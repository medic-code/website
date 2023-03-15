import { StyledOrderedList, StyledUnorderedList } from './styles';
import { ListTypes } from './types';

const List = (props: ListTypes) => {
  const { children, variant } = props;

  return (
    <>
      {variant === 'ordered' ? (
        <StyledOrderedList>{children}</StyledOrderedList>
      ) : (
        <StyledUnorderedList>{children}</StyledUnorderedList>
      )}
    </>
  );
};

export default List;
