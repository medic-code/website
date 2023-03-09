import styled from 'styled-components';
import { Button } from '../../../design_system/index';


export const Section = styled.section`
  background-color: hsl(var(--palette-green-20));
  padding: 20px 0px;
  grid-column: 1/-1;
  width: 100%;
`;

export const StyledCV = styled(Button)`
  background-color: hsl(var(--palette-green-70));
  color: hsl(var(--palette-green-20));

  &:hover {
    color: hsl(var(--palette-green-15));
    background-color: hsl(var(--palette-green-65));
    box-shadow: 0 2px 40px -4px hsl(var(--palette-green-45));
  }
`

