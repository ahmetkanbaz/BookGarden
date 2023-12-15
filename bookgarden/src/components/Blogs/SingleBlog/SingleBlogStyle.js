import styled from "styled-components";

export const SingleBlogWrapper = styled.a`
  img {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: translateX(10px);
    }
  }
`;
