import styled from "styled-components";

export const UpdateModalWrapper = styled.div`
  .modal-content {
    background-color: ${({ theme }) =>
      theme == "light" ? "#F0F0F0" : "#333333"};
    input,
    textarea {
      color: ${({ theme }) => (theme == "light" ? "#000000" : "#F5F5F5")};
      &:focus {
        border-color: #000000;
        background-color: ${({ theme }) =>
          theme == "light" ? "#F0F0F0" : "#636363"};
      }
    }
  }
`;