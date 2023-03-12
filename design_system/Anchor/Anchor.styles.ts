import styled from 'styled-components';
import { fontWeights, fontSizes } from '../lib';
import { applyStyleModifiers } from 'styled-components-modifiers';

const ANCHOR_MODIFIERS = {
  underline: () => `
       text-decoration: underline;
    `,
};

interface AnchorProps {
  modifiers?: 'underline' | string[];
  size?: string;
  margin?: string;
}
const StyledAnchor = styled.a<AnchorProps>`
  lineheight: inherit;
  margin: ${(props) => props.margin || '0px'};
  font-family: inherit;
  font-weight: ${fontWeights['--bold']};
  font-size: ${(props) => (props.size ? props.size : fontSizes['--paragraph'])};
  color: ${(props) =>
    props.color ? props.color : 'hsl(var(--palette-blue-45))'};
  transition: border-color 0.3s ease, color 0.3s ease;
  word-break: break-word;
  outline: none;
  text-decoration: none;
  ${applyStyleModifiers(ANCHOR_MODIFIERS)}
`;

export default StyledAnchor;
