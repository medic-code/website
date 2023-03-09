import styled from 'styled-components';
import { GridProps } from './Grid.types';

const Grid = styled.div<GridProps>`
  display: grid;
  gap: ${(props) => props.gap || 0};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  justify-items: ${(props) => props.justifyItems};
  grid-template-columns: ${(props) => props.column};
  grid-template-rows: ${(props) => props.rows};

  > * {
    grid-column: 2;
  }
`;

export default Grid;
