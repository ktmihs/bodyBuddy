import Link from 'next/link';
import { ButtonContainer } from './styledButtonGroup';

const EditorGroup = ({
  selectedItem,
  className,
  leftUrl,
  onChangeEditingMode,
  onChangeDeleteMode,
}: EditorGroupProps) => {
  const onClickHandler = (onChangeState: (arg0: boolean) => void) => {
    sessionStorage.setItem('selected', selectedItem);
    onChangeState(true);
  };

  return (
    <ButtonContainer className={className}>
      {className !== 'comment' ? (
        <Link href={leftUrl ? leftUrl : '/'}>
          <a>수정</a>
        </Link>
      ) : (
        <button
          onClick={() => {
            onChangeEditingMode ? onClickHandler(onChangeEditingMode) : '';
          }}
        >
          수정
        </button>
      )}

      <span></span>
      <button onClick={() => onClickHandler(onChangeDeleteMode)}>삭제</button>
    </ButtonContainer>
  );
};

export default EditorGroup;
