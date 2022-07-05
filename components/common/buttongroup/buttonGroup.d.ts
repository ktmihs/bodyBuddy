interface EditorGroupProps {
  selectedItem: string;
  className: string;
  leftUrl?: string;
  onChangeEditingMode?: Dispatch<SetStateAction<boolean>>;
  onChangeDeleteMode: Dispatch<SetStateAction<boolean>>;
}
