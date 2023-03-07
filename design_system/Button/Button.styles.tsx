import styled from 'styled-components';
import { fontSizes, fontWeights, spaces, green } from '../lib';
import { StyleProp } from './Button.types';

const StyledButton = styled.button<StyleProp>`
    cursor: pointer;
    font: inherit;
    font-size: ${(props) => (props.size ? props.size : fontSizes['paragraph'])};
    font-weight: ${(props) =>
      props.fontWeight ? props.fontWeight : fontWeights['bold']};
    width: max-content;
    border-radius: ${spaces['8']};
    background-color: #E5F3F3;
    padding: 11px 16px;
    color: #139398;
    transition: background-color 0.2s linear, color 0.2s linear, border 0.2s linear;
    border: 0;
    
    &:active {
        box-shadow: 0 4px 20px #E5F3F3;
        background-color: ${green['200']}
        border: 2px solid ${green['400']}
    }

    &:disabled {
        cursor: not-allowed;
        background: none;
    }
    
    &:hover {
        box-shadow: 0 4px 20px #E5F3F3;
        background-color: ${green['200']}
    }

    $:focus {
        box-shadow: 0 4px 20px #E5F3F3;
        background-color: ${green['200']}
        border: 1px solid ${green['100']}
    }
`;

export default StyledButton;
