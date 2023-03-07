import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { primaryFont } from './typography';

const GlobalStyles = createGlobalStyle`
    ${normalize()}
    html {
        box-sizing: border-box;
        font-size: 16px;
        font-family: ${primaryFont};
    }
    *, *:before, *:after {
        "box-sizing": inherit;
    }

    body {
        margin: 0;
    }
`;

export default GlobalStyles;
