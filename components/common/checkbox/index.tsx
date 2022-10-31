import Image from 'next/image';
import activeCheckBox from 'public/assets/common/checkbox-checked.svg';
import inActiveCheckBox from 'public/assets/common/checkbox.svg';
import { memo, MouseEvent, useCallback } from 'react';
import {
  CheckBoxContainer,
  CheckBoxContentWrapper,
  CheckBoxContent,
  CheckedIconWrapper,
} from './styledCheckbox';

const OptionCheckBox = ({
  checkBoxList,
  isChecked,
  handleClickSetIsChecked,
}: CheckBoxListProps) => {
  const handleClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const value = e.currentTarget.id;

      handleClickSetIsChecked({
        ...isChecked,
        [value]: !isChecked[value],
      });
    },
    [isChecked]
  );

  return (
    <CheckBoxContainer>
      {checkBoxList.map(({ checkBox, checkBoxImage, checkBoxCheckedImage }: CheckBoxProps) => (
        <CheckBoxContentWrapper
          key={checkBox}
          className={isChecked[checkBox] ? 'checked' : ''}
          id={checkBox}
          onClick={handleClick}
        >
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
};

export default memo(OptionCheckBox);
