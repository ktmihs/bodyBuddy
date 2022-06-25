import { StyledRightLinkModal, StyledRightButtonModal } from './styledModal';
import Link from 'next/link';

export const RightLinkModal = ({
  modalContent,
  rightButtonLink,
  rightButtonContent,
  isModalState,
  onChangeSetState,
}: RightLinkBtnProps) => {
  return (
    <StyledRightLinkModal>
      <div className="modal-content">{modalContent}</div>
      <div className="modal-button-wrapper">
        <button onClick={() => onChangeSetState(!isModalState)}>취소</button>
        <Link href={rightButtonLink}>
          <a>{rightButtonContent}</a>
        </Link>
      </div>
    </StyledRightLinkModal>
  );
};

export const RightButtonModal = ({
  modalContent,
  rightButtonContent,
  onClickedRightBtn,
  isModalState,
  onChangeSetState,
}: RightButtonProps) => {
  return (
    <StyledRightButtonModal>
      <div className="modal-content">{modalContent}</div>
      <div className="modal-button-wrapper">
        <button className="left" onClick={() => onChangeSetState(!isModalState)}>
          취소
        </button>
        <button className="right" onClick={() => onClickedRightBtn()}>
          {rightButtonContent}
        </button>
      </div>
    </StyledRightButtonModal>
  );
};
