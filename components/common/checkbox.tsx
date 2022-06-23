import styled from '@emotion/styled';
import Image from 'next/image';
import activeCheckBox from 'public/assets/common/checkbox-checked.svg';
import inActiveCheckBox from 'public/assets/common/checkbox.svg';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';

type CheckBoxProps = {
  checkBoxItemID: string;
  checkBoxText: string;
  checkBoxImage?: string;
};

type CheckBoxListProps = {
  checkBoxList: CheckBoxProps[];
}

const CheckBoxContainer = styled.section`
    padding: 10px 0;
  `;

  const CheckBoxContent = styled.div`
    display: inline-block;
    width: 164px;
    height: 43px;
    background: #FFFFFF;
    border: 1px solid #CDCDCD;
    border-radius: 5px;
    margin-bottom: 10px;

    & > h2{
      display: inline;
      background-color: aqua;
    }

    span{
      display: inline-block;
      font-weight: 700;
      font-size: 14px;
      text-align: center;
      line-height: 43px;
      color: #464646;
      padding: 0 17px;
    }

    &:nth-of-type(2n){
      margin-left: 10px;
    }
  `;

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