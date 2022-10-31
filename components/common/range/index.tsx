import { debounce } from 'lodash';
import Slider from 'rc-slider';
import { useMemo } from 'react';
import { RangeWrapper, SliderLabel, RangeLabel } from './styledRange';

export const CustomRange = ({ type, range, onChangeSetRange, min, max }: RangeProps) => {
  const debouncedSearch = useMemo(() => debounce((test) => onChangeSetRange(test), 300), [range]);

  return (
    <>
      <RangeLabel>
        {range[0]} ~ {range[1]} {type}
      </RangeLabel>
      <RangeWrapper>
        <Slider
          range
          min={min}
          max={max}
          defaultValue={range}
          value={range}
          onChange={debouncedSearch}
        />
        <SliderLabel>
          <span>
            {range[0]} {type}
          </span>
          <span>
            {range[1]} {type}
          </span>
        </SliderLabel>
      </RangeWrapper>
    </>
  );
};
