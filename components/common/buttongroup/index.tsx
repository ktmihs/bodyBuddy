import { ButtonContainer } from './styledButtonGroup';

interface ButtonProps {
  className: string;
}

const ButtonGroup = ({ className }: ButtonProps) => {
  return (
    <ButtonContainer className={className}>
      <button>수정</button>
      <span></span>
      <button>{className === 'edit' ? '취소' : '삭제'}</button>
    </ButtonContainer>
  );
};

export default ButtonGroup;
