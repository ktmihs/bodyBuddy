import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-evenly;
  button,
  a {
    font-size: 12px;
    line-height: 1.3;
  }
  &[class~='post'] {
    a,
    button {
      padding: 5% 10%;
      border-radius: 5px;
      color: ${({ theme }) => theme.black};
      border: 1px solid ${({ theme }) => theme.lineGray};
    }
  }
  &[class~='review'] {
    justify-content: flex-end;
    transform: translateY(-40%);

    a,
    button {
      color: ${({ theme }) => theme.lineGray};
      font-weight: bold;
      align-self: center;
      border: none;
    }
    span {
      height: 40%;
      border-right: 1px solid ${({ theme }) => theme.lineGray};
      align-self: center;
      display: inline-block;
    }
  }
  &[class~='comment'],
  &[class~='edit'] {
    a,
    button {
      color: ${({ theme }) => theme.purple};
      font-weight: bold;
      border: none;
    }
  }

  a,
  button {
    padding: 5%;
    align-self: flex-start;
    background-color: transparent;
    cursor: pointer;
  }
`;
