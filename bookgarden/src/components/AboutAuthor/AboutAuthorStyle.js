import styled from 'styled-components'

export const AboutAuthorWrapper = styled.section `
  transition: all .3s ease-in-out;
  background-color: ${({theme}) => theme == 'light' ? '#F5EBE6' : '#232323'};
  img {
    width: 80%;
  }
  h5, h6 {
    color: #C27B7F;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    letter-spacing: 3px;
  }

  h5 {
    font-size: 2.3rem;
  }

  h4 {
    color: #2F4858;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    letter-spacing: 9px;
  }
`;