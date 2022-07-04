import Image from 'next/image';
import activeCheckBox from 'public/assets/common/checkbox-checked.svg';
import inActiveCheckBox from 'public/assets/common/checkbox.svg';
import { MouseEvent, useCallback } from 'react';
import {
  CheckBoxContainer,
  CheckBoxContentWrapper,
  CheckBoxContent,
  CheckedIconWrapper,
} from './styledCheckbox';

export function OptionCheckBox({
  checkBoxList,
  isChecked,
  handleClickSetIsChecked,
}: CheckBoxListProps) {
  const handleClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const id = e.currentTarget.id;
      console.log(id, document.getElementById(id));
      id &&
        handleClickSetIsChecked({
          ...isChecked,
          [id]: !isChecked[id],
        });
      !isChecked[id]
        ? document.getElementById(id)?.classList.add('checked')
        : document.getElementById(id)?.classList.remove('checked');
    },
    [isChecked]
  );

  return (
    <CheckBoxContainer>
      {checkBoxList.map(({ checkBox, checkBoxImage, checkBoxCheckedImage }: CheckBoxProps) => (
        <CheckBoxContentWrapper key={checkBox} id={checkBox} onClick={handleClick}>
          <CheckedIconWrapper>
            <Image src={isChecked[checkBox] ? activeCheckBox : inActiveCheckBox}></Image>
          </CheckedIconWrapper>
          <CheckBoxContent>
            <span>{checkBox}</span>
            {checkBoxImage && isChecked[checkBox]
              ? checkBoxCheckedImage && (
                  <Image src={checkBoxCheckedImage} width={30} height={40}></Image>
                )
              : checkBoxImage && <Image src={checkBoxImage} width={30} height={40}></Image>}
          </CheckBoxContent>
        </CheckBoxContentWrapper>
      ))}
    </CheckBoxContainer>
  );
}
