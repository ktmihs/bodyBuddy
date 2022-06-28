import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-evenly;
  &[class~='post'] {
    button {
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.lineGray};
    }
  }
  &[class~='review'] {
    button {
      color: ${({ theme }) => theme.lineGray};
      font-weight: bold;
      border: none;
    }
  }
  &[class~='comment'],
  &[class~='edit'] {
    button {
      color: ${({ theme }) => theme.purple};
      font-weight: bold;
      border: none;
    }
  }

  button {
    padding: 5%;
    align-self: flex-start;
    background-color: transparent;
    cursor: pointer;
  }
`;
