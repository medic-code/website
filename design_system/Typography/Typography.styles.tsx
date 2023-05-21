import styled from 'styled-components';
import { fontSizes, fontWeights, primaryFont } from '../lib';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { IProps } from './Typography.types';

const StyledText = styled.p<IProps>`
  padding: 0px;
  margin: ${(props) => props.margin || '0 0 1rem 0'};
  line-height: 1.9;
  word-break: keep-all;
  letter-spacing: 0.3px;
  text-rendering: optimizeLegibility;
  font-size: ${(props) => (props.size ? props.size : fontSizes['--paragraph'])};
  font-family: ${primaryFont};
  font-weight: ${(props) =>
    props.fontWeight ? props.fontWeight : fontWeights['--normal']};
  color: ${(props) =>
    props.color ? props.color : 'hsl(var(--palette-gray-80))'};
`;

export default StyledText;
