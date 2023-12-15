import styled from "styled-components";

export const CustomCard = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: ${({theme}) => theme == 'light' ? '#F3F3F3' : '#2B2B2B'};
  color: ${({theme}) => theme == 'light' ? '#000000' : '#DDDDDD'};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
    background-color: ${({theme}) => theme == 'light' ? '#DDDDDD' : '#3F3F3F'};
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  }
  img {
    height: 250px;
  }
  h5 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  p {
    font-size: 0.93rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      -webkit-line-clamp: 2;
    }
  }
`;
