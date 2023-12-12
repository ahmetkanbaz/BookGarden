import styled from 'styled-components'

export const CustomButton = styled.button `
  transition: all .3s ease-in-out;
  background-color: ${({backgroundcolor}) => backgroundcolor};
  border-radius: ${({borderradius}) => borderradius};
  border: ${({bordervalue}) => bordervalue};
  padding: ${({buttonpadding}) => buttonpadding};
`;