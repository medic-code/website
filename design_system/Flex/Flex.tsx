import styled from 'styled-components';
import { FlexProps } from './Flex.types';

const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${(props) => props.alignItems || 'center'};
  wrap: ${(props) => props.wrap || 'nowrap'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-content: ${(props) => props.alignContent};
  gap: ${(props) => props.gap || '0px'};
`;

export default Flex;
