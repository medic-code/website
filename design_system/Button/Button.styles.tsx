import styled from 'styled-components';
import { fontSizes, fontWeights, spaces } from '../lib';
import { StyleProp } from './Button.types';

const StyledButton = styled.button<StyleProp>`
  cursor: pointer;
  font: inherit;
  font-size: ${(props) => (props.size ? props.size : fontSizes['--paragraph'])};
  font-weight: ${(props) =>
    props.fontWeight ? props.fontWeight : fontWeights['--bold']};
  margin: ${(props) => (props.margin ? props.margin : '0px')})};
  width: max-content;
  border-radius: ${spaces['--space-8']};
  padding: 11px 16px;
  color: #139398;
  transition: background-color 0.2s linear, color 0.2s linear,
    border 0.6s linear;
  border: 0;
  &:active {
    box-shadow: 0 4px 20px #e5f3f3;
    background-color: hsl(var(--palette-green-15));
    transform: scale(0.95, 1);
  }

  &:disabled {
    cursor: not-allowed;
    background: none;
  }

  $:focus {
    box-shadow: 0 4px 20px #e5f3f3;
    background-color: hsl(var(--palette-green-15));
    border: 1px solid hsl(var(--palette-green-95));
  }
`;

export default StyledButton;
