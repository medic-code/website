import styled from 'styled-components';
import { fontWeights, green, fontSizes, primaryFont } from '../lib';
import { applyStyleModifiers } from 'styled-components-modifiers';

const ANCHOR_MODIFIERS = {
  underline: () => `
        &:hover {
            border-bottom: 3px solid;
            border-color:  ${green[800]};
        }
    `,
};

interface AnchorProps {
  modifiers?: 'underline' | string[];
  size: string;
}
const StyledAnchor = styled.a<AnchorProps>`
  lineheight: inherit;
  font-family: 'inherit';
  font-weight: ${fontWeights['bold']};
  font-size: ${(props) => (props.size ? props.size : fontSizes['paragraph'])};
  color: ${green[800]};
  transition: border-color 0.3s ease, color 0.3s ease;
  word-break: break-word;
  outline: 'none';
  textdecoration: 'none';
  ${applyStyleModifiers(ANCHOR_MODIFIERS)}
`;

export default StyledAnchor;
