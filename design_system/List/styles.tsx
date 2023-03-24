import styled from 'styled-components';

export const StyledListItem = styled.li`
  list-style: none;
  display: flex;
  margin-bottom: 1rem;
  line-height: 1.9;
`;

export const StyledUnorderedList = styled.ul``;
export const StyledOrderedList = styled.ol`
  list-style-type: decimal;
  line-height: 1.9;
  letter-spacing: 0.3px;
  color: hsl(var(--palette-gray-75));
`;
