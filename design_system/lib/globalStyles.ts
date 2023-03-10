import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import { radii } from './radii';
import { spaces } from './spaces';
import { fontWeights, fontSizes, primaryFont } from './typography';
import { palette } from './colors';

const GlobalStyles = createGlobalStyle`
    ${normalize()}
    html {
        box-sizing: border-box;
        font-size: 18px;
        font-family: ${primaryFont};
    }
    *, *:before, *:after {
        "box-sizing": inherit;
    }

    body {
        margin: 0;
    }

    :root {
        ${radii};
        ${spaces};
        ${fontWeights};
        ${fontSizes};
        ${primaryFont};
        ${palette}
    }

    img {
        max-width: 100%;
        object-fit: cover;
    }
`;

export default GlobalStyles;
