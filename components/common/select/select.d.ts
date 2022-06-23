interface SelectProps {
  currentSelectedData: string | number;
  selectData: string[] | number[];
  selectWidth: number;
  onSetCurrentSelected: Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<number>>;
}

type EventProps = {
  target: EventProps;
};
