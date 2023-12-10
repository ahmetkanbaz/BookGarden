import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #F5F5F5;
  }

  a {
    text-decoration: none;
    transition: all .3s ease-in-out;
  }
`;