interface CheckBoxProps {
  checkBox: string;
  checkBoxImage?: string;
  checkBoxCheckedImage?: string;
}

interface InitialStateProps {
  [id: number | string]: boolean;
}

interface CheckBoxListProps {
  checkBoxList: CheckBoxProps[];
  isChecked: InitialStateProps;
  handleClickSetIsChecked: Dispatch<SetStateAction<boolean>>;
}
