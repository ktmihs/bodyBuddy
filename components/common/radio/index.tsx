import Image from 'next/image';
import { MouseEvent, useState } from 'react';
import { RadioProps } from './radio';
import { RadioWrapper, CheckedIconWrapper } from './styledRadio';
import activeCheckBox from 'public/assets/common/checkbox-checked.svg';
import inActiveCheckBox from 'public/assets/common/checkbox.svg';

export const Radio = ({ notSelected }: RadioProps) => {
  const [isChecked, setIsChecked] = useState('anyone');

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const input = e.currentTarget.querySelector('input[name=gender]');
    input && setIsChecked(input.id);
  };

  return (
    <RadioWrapper>
      {notSelected ? (
        <div onClick={handleClick}>
          <CheckedIconWrapper>
            <Image src={isChecked === 'anyone' ? activeCheckBox : inActiveCheckBox}></Image>
          </CheckedIconWrapper>
          <input type="radio" name="gender" id="anyone" />
          <label htmlFor="anyone">상관없음</label>
        </div>
      ) : null}
      <div onClick={handleClick}>
        <CheckedIconWrapper>
          <Image src={isChecked === 'man' ? activeCheckBox : inActiveCheckBox}></Image>
        </CheckedIconWrapper>
        <input type="radio" name="gender" id="man" />
        <label htmlFor="man">남성</label>
      </div>
      <div onClick={handleClick}>
        <CheckedIconWrapper>
          <Image src={isChecked === 'woman' ? activeCheckBox : inActiveCheckBox}></Image>
        </CheckedIconWrapper>
        <input type="radio" name="gender" id="woman" />
        <label htmlFor="woman">여성</label>
      </div>
    </RadioWrapper>
  );
};
