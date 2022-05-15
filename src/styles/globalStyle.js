import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {font-family: "SF Pro Display"; src: url("//db.onlinewebfonts.com/t/179429c3795fb9aed42c526bd1133cc0.eot"); src: url("//db.onlinewebfonts.com/t/179429c3795fb9aed42c526bd1133cc0.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/179429c3795fb9aed42c526bd1133cc0.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/179429c3795fb9aed42c526bd1133cc0.woff") format("woff"), url("//db.onlinewebfonts.com/t/179429c3795fb9aed42c526bd1133cc0.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/179429c3795fb9aed42c526bd1133cc0.svg#SF Pro Display") format("svg"); }

  html{
    display: flex;
    justify-content: center;
    width:100%;
    height: 100%;
    font-size: 62.5%;
    font-family: "SF Pro Display";
  }

  #root, body {
    width: 375px;
    height: 100%;
    font-size: 62.5%;
    font-family: "SF Pro Display";
  }

  * {
    box-sizing: border-box;
	}

  button:hover {
    cursor: pointer;
  }
`;

export default GlobalStyle;
