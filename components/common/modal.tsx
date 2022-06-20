import styled from '@emotion/styled';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

interface ModalProps {
  modalContent: string;
  rightButtonContent: string;
  isModalState: boolean;
  onChangeSetState: Dispatch<SetStateAction<boolean>>;
}

interface RightLinkBtnProps extends ModalProps {
  rightButtonLink: string;
}

interface RightButtonProps extends ModalProps {
  onClickedRightBtn: () => void;
}

const StyledRightLinkModal = styled.div`
  background-color: red;
  width: 331px;
  text-align: center;
  overflow: hidden;

  .modal-content {
    font-size: 15px;
  }

  .modal-button-wrapper {
    display: flex;

    button {
      background-color: #f6f6f6;
      color: ${(props) => props.theme.purple};
    }
  }
`;
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
    <StyledRightLinkModal>
      <div>{modalContent}</div>
      <div>
        <button onClick={() => onChangeSetState(!isModalState)}>취소</button>
        <button onClick={() => onClickedRightBtn()}>{rightButtonContent}</button>
      </div>
    </StyledRightLinkModal>
  );
};
