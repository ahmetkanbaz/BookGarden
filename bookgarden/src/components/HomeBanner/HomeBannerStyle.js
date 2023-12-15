import styled from "styled-components";

export const CustomBanner = styled.section `
  background-color: ${({theme}) => theme == 'light' ? '#F5EBE6' : '#232323'};
  transition: all .3s ease-in-out;
  h3 {
    color: ${({theme}) => theme == 'light' ? '#C8888B' : '#F0F0F0'};
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 1.5rem;
    letter-spacing: 3px;
  }

  h1 {
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
`;