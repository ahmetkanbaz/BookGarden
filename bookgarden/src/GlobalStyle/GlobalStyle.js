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

  .nav-link,
  .nav-link > svg {
    color: ${({ theme }) => (theme == "light" ? "#000000" : "#F5F5F5")};
    transition: all .3s ease-in-out;
  }

  .nav-link:hover,
  .nav-link > svg:hover {
    color: #BA49FF;
  }

  .form-control {
    background-color: ${({ theme }) =>
      theme == "light" ? "#F0F0F0" : "#3E3E3E"};
    transition: all .3s ease-in-out;
    &:focus {
      box-shadow: none;
      border: 1px solid #073d87;
    }
    &::placeholder {
      font-size: .89rem;
      font-style: italic;
      color: ${({ theme }) => (theme == "light" ? "#101010" : "#E0E0E0")};
      transition: all .3s ease-in-out;
    }
  }

  textarea {
    resize: none;
  }
`;
