import Image from 'next/image';
import { useState } from 'react';
import { StyledSelect, StyledSelectUl, StyledSelectWrapper } from './styledSelect';

import selectTriangle from '@assets/common/selectTriangle.svg';
import selectTriangleClose from '@assets/common/selectTriangleClose.svg';

export const Select = ({
  currentSelectedData,
  selectData,
  selectWidth,
  onSetCurrentSelected,
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

  return (
    <StyledSelectWrapper>
      <StyledSelect onClick={onSetIsListOpen} width={selectWidth}>
        <span>{currentSelectedData}</span>
        {isListOpen ? (
          <Image src={selectTriangleClose} alt="옵션 닫기" width="15px" height="15px" />
        ) : (
          <Image src={selectTriangle} alt="옵션 열기" width="15px" height="15px" />
        )}
      </StyledSelect>
      {isListOpen ? (
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
  );
};
