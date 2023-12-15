import styled from "styled-components";

export const CustomFooter = styled.footer `
  transition: all 0.3s ease-in-out;
  background-color: ${({ theme }) =>
    theme == "light" ? "#F5EBE6" : "#232323"};
  a {
    color: ${({theme}) => theme == 'light' ? '#000000' : '#F5EBE6'};
  }
`;