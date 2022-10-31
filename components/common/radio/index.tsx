import Image from 'next/image';
import { RadioWrapper, CheckedIconWrapper } from './styledRadio';
import activeCheckBox from 'public/assets/common/checkbox-checked.svg';
import inActiveCheckBox from 'public/assets/common/checkbox.svg';

export const Radio = ({ notSelected, isChecked, handleClick }: RadioProps) => {
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
