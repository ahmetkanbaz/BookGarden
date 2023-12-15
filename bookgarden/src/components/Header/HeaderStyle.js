import styled from "styled-components";

export const CustomNavbar = styled.nav`
  transition: all 0.3s ease-in-out;
  background-color: ${({ theme }) =>
    theme == "light" ? "#F5EBE6" : "#232323"};
  .navbar-brand {
    color: ${({theme}) => theme == 'light' ? '#000000' : '#F5F5F5'}
  }
`;
