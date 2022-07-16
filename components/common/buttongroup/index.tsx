import Link from 'next/link';
import { ButtonContainer } from './styledButtonGroup';

export const EditorGroup = ({
  className,
  EditorURL,
  lastEdited,
  onChangeEditingMode,
  onChangeDeleteMode,
}: EditorGroupProps) => {
  const onClickHandler = (onChangeState: (arg0: boolean) => void) => onChangeState(true);
  return (
    <ButtonContainer className={className}>
      {className !== 'comment' ? (
        <Link
          href={{
            pathname: EditorURL ? EditorURL : '/',
            query: { edited: JSON.stringify(lastEdited) },
          }}
          as={EditorURL}
        >
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
