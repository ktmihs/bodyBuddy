import Image from 'next/image';
import activeCheckBox from 'public/assets/common/checkbox-checked.svg';
import inActiveCheckBox from 'public/assets/common/checkbox.svg';
import { MouseEvent, useCallback } from 'react';
import { useState } from 'react';
import { CheckBoxContainer, CheckBoxContentWrapper, CheckBoxContent, CheckedIconWrapper } from './styledCheckbox';

export function OptionCheckBox({ checkBoxList }: CheckBoxListProps) {
  
  const initialState:any = {};

  checkBoxList.forEach((checkBox)=>{
    const {checkBoxItemID} = checkBox;
    initialState[checkBoxItemID] = false;
  });
  
  const [isChecked, setIsChecked] = useState(initialState);
  
  const handleClick = useCallback((e:MouseEvent<HTMLDivElement>) => {
    const id = e.currentTarget.id;
    id && setIsChecked({
      ...isChecked,
      [id]: !isChecked[id]
    })
    document.getElementById(id)?.classList.toggle('checked');
  },[isChecked]);

  return (
    <CheckBoxContainer>
      {
        checkBoxList.map(({checkBoxItemID, checkBoxText, checkBoxImage, checkBoxCheckedImage}: CheckBoxProps) =>
          <CheckBoxContentWrapper key={checkBoxItemID} id={checkBoxItemID} onClick={handleClick}>
            <CheckedIconWrapper>
              <Image src={isChecked[checkBoxItemID] ? activeCheckBox : inActiveCheckBox}></Image>
            </CheckedIconWrapper>
            <CheckBoxContent>
              <span>{checkBoxText}</span>
              {
                checkBoxImage && document.getElementById(checkBoxItemID)?.classList.contains('checked')?
                  checkBoxCheckedImage && <Image src={checkBoxCheckedImage} width={30} height={40}></Image>
                  : 
                  checkBoxImage && <Image src={checkBoxImage} width={30} height={40}></Image>
              }
            </CheckBoxContent>
          </CheckBoxContentWrapper>)
      }
    </CheckBoxContainer>
  );
}