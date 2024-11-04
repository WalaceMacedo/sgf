import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Source Sans 3", sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #d7d4d4;
  }
`;

export default GlobalStyle;
