import styled from '@emotion/styled';

interface ButtonProps {
  className: string;
}

const ButtonContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-evenly;
  &[class~='post'] {
    button {
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.lineGray};
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

const ButtonGroup = ({ className }: ButtonProps) => {
  return (
    <ButtonContainer className={className}>
      <button>수정</button>
      <button>{className === 'edit' ? '취소' : '삭제'}</button>
    </ButtonContainer>
  );
};

export default ButtonGroup;
