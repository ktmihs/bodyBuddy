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
