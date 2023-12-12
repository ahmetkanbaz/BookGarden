import styled from 'styled-components'

export const CustomButton = styled.button `
  transition: all .3s ease-in-out;
  background-color: ${({backgroundcolor}) => backgroundcolor};
  border-radius: ${({borderradius}) => borderradius};
  border: ${({bordervalue}) => bordervalue};
  color: ${({textcolor}) => textcolor};
  padding: ${({buttonpadding}) => buttonpadding};
  font-size: ${({textfontsize}) => textfontsize};
  &:hover {
    background-color: ${({hoverbackgroundcolor}) => hoverbackgroundcolor};
    color: ${({hovertextcolor}) => hovertextcolor};
  }
`;