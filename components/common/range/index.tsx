import Slider from 'rc-slider';
import { useState } from 'react';
import { RangeWrapper, SliderLabel } from './styledRange';

export const CustomRange = ({ type, range, onChangeSetRange }: RangeProps) => {
  const [test, setTest] = useState<number[] | number>(range);

  const handleChange = (value: number[] | number) => {
    setTest(value);
    // value && onChangeSetRange(value);
  };

  return (
    <RangeWrapper>
      <Slider
        range
        min={0}
        max={typeof range === 'object' ? range[1] : 10}
        defaultValue={range}
        value={test}
        onChange={handleChange}
      />
      {type === 'price' ? (
        <SliderLabel>
          <span>{typeof range === 'object' ? range[0] : 0}만원</span>
          <span>{typeof range === 'object' ? range[0] : 100}만원</span>
        </SliderLabel>
      ) : (
        <SliderLabel>
          <span>{typeof range === 'object' ? range[0] : 0}년</span>
          <span>{typeof range === 'object' ? range[0] : 10}년</span>
        </SliderLabel>
      )}
    </RangeWrapper>
  );
};
