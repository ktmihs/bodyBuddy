interface SelectProps {
  currentSelectedData: string | number;
  selectData: string[] | number[];
  selectWidth: number;
  onSetCurrentSelected: Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<number>>;
  isDisabled?: boolean;
}

type EventProps = {
  target: EventProps;
};

interface CityDistrictSelectProps {
  cityInfo: string;
  onSetCityInfo: Dispatch<SetStateAction<string>>;
  districtInfo: string;
  onSetDistrictInfo: Dispatch<SetStateAction<string>>;
}
