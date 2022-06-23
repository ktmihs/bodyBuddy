import Image from 'next/image';
import activeCheckBox from 'public/assets/common/checkbox-checked.svg';
import inActiveCheckBox from 'public/assets/common/checkbox.svg';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { CheckBoxContainer, CheckBoxContent } from './styledCheckbox';

export function OptionCheckBox({ checkBoxList }: CheckBoxListProps) {
  
  const initialState:any = {};
  
  checkBoxList.forEach((checkBox)=>{
    const {checkBoxItemID} = checkBox;
    initialState[checkBoxItemID] = false;
  });
  
  const [isChecked, setIsChecked] = useState(initialState);
  
  const handleClick=useCallback((e:any)=>{
    const id = e.currentTarget.dataset.id;
    setIsChecked({
      ...isChecked,
      [id]: !isChecked[id]
    })
    // 체크됐을 때, 테두리 & color 바꿔주기
  },[isChecked]);

  return (
    <CheckBoxContainer>
      {
        checkBoxList.map(({checkBoxItemID, checkBoxText, checkBoxImage}:CheckBoxProps) =>
          <CheckBoxContent key={checkBoxItemID} data-id={checkBoxItemID} onClick={handleClick}>
            <Image src={isChecked[checkBoxItemID] ? activeCheckBox : inActiveCheckBox}></Image>
            <span>{checkBoxText}</span>
            {checkBoxImage && <Image src={checkBoxImage}></Image>}
          </CheckBoxContent>)
      }
    </CheckBoxContainer>
  );
}