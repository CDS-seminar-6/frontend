import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {font-family: "SF Pro Text"; src: url("//db.onlinewebfonts.com/t/1c45e28f8e86cc89876f003b953cc3e9.eot"); src: url("//db.onlinewebfonts.com/t/1c45e28f8e86cc89876f003b953cc3e9.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/1c45e28f8e86cc89876f003b953cc3e9.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/1c45e28f8e86cc89876f003b953cc3e9.woff") format("woff"), url("//db.onlinewebfonts.com/t/1c45e28f8e86cc89876f003b953cc3e9.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/1c45e28f8e86cc89876f003b953cc3e9.svg#SF Pro Text") format("svg"); }

  #root, body,html {
    width: 375px;
    height: 100%;
    margin: 0 auto;
    font-size: 62.5%;
    font-family: "SF Pro Text";
  }

  #root{
    background-color: ${theme.colors.surfit_black_2};
  }

  * {
    box-sizing: border-box;
	}

  button:hover {
    cursor: pointer;
  }
`;

export default GlobalStyle;
