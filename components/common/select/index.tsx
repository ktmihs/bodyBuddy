import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  StyledBack,
  StyledCityDistrictSelect,
  StyledSelect,
  StyledSelectUl,
  StyledSelectWrapper,
} from './styledSelect';

import selectTriangle from '@assets/common/selectTriangle.svg';
import selectTriangleClose from '@assets/common/selectTriangleClose.svg';
import { city, district } from '@data';

export const Select = ({
  currentSelectedData,
  selectData,
  selectWidth,
  onSetCurrentSelected,
  isDisabled = false,
}: SelectProps) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const onSetIsListOpen = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsListOpen(!isListOpen);
  };

  const onClickCurrentSelected = (e: React.SyntheticEvent): void => {
    if (!(e.target instanceof HTMLLIElement)) {
      setIsListOpen(false);
      return;
    }

    onSetCurrentSelected(e.target.dataset.id);
    setIsListOpen(false);
  };

  const setListOpenFalse = () => {
    setIsListOpen(false);
  };

  return (
    <>
      {isListOpen ? <StyledBack onClick={setListOpenFalse} /> : <></>}
      <StyledSelectWrapper>
        <StyledSelect onClick={onSetIsListOpen} width={selectWidth}>
          <span>{currentSelectedData}</span>
          {isListOpen && !isDisabled ? (
            <Image src={selectTriangleClose} alt="옵션 닫기" width="15px" height="15px" />
          ) : (
            <Image src={selectTriangle} alt="옵션 열기" width="15px" height="15px" />
          )}
        </StyledSelect>
        {isListOpen && !isDisabled ? (
          <StyledSelectUl width={selectWidth}>
            {selectData.map((data) => (
              <li key={data} data-id={data} onClick={onClickCurrentSelected}>
                {data}
              </li>
            ))}
          </StyledSelectUl>
        ) : (
          <></>
        )}
      </StyledSelectWrapper>
    </>
  );
};

export const CityAndDistrictSelect = ({
  cityInfo,
  onSetCityInfo,
  districtInfo,
  onSetDistrictInfo,
}: CityDistrictSelectProps) => {
  return (
    <StyledCityDistrictSelect>
      <Select
        currentSelectedData={cityInfo}
        onSetCurrentSelected={onSetCityInfo}
        selectData={city}
        selectWidth={100}
      />
      <Select
        currentSelectedData={districtInfo}
        onSetCurrentSelected={onSetDistrictInfo}
        selectData={cityInfo === '시/군' ? [] : district[cityInfo]}
        selectWidth={150}
        isDisabled={cityInfo === '시/군' ? true : false}
      />
    </StyledCityDistrictSelect>
  );
};
