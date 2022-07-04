interface RangeProps {
  type: string;
  range: any;
  onChangeSetRange: Dispatch<SetStateAction<number[]>>;
  min: number;
  max: number;
}
