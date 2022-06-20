import { RightButtonModal } from '@components/common/modal';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useEffect } from 'react';

const DetailOption = ({isModalState, onChangeSetState}:any) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  const Modal = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: fixed;
    z-index: 1000;
    text-align: center;

    form{
      /* margin: 0 20px; */
    }
  `;

  const CheckBoxContainer = styled.section`
    padding: 10px 0;
  `;

  const CheckBox = styled.div`
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

  const SaveButton = styled.button`
    width: 335px;
    height: 47px;
    background: #858FF1;
    border-radius: 10px;
    color: #fff;
    border: none;
    cursor: pointer;
    text-align: center;
    margin-top: 20px;
    font-weight: 500;
    font-size: 17px;
    line-height: 25px;
  `;
  
  return(
    <>
      <Modal>
        <RightButtonModal modalContent={"상세 옵션"}
          rightButtonContent={"X"}
          onClickedRightBtn={onChangeSetState}
          isModalState={isModalState}
          onChangeSetState={onChangeSetState} />
        {/* <button onClick={onChangeSetState}>X</button> */}
        <form>
          <fieldset>
            <legend className="srOnly">상세 옵션</legend>
            <div>
              <h2>위치</h2>
              <ul id="city">
                <li>서울시</li>
                <li>서울시</li>
                <li>서울시</li>
                <li>서울시</li>
                <li>서울시</li>
              </ul>
              <ul id="city">
                <li>서울시</li>
                <li>서울시</li>
                <li>서울시</li>
                <li>서울시</li>
                <li>서울시</li>
              </ul>
            </div>
            <div>
              <h2>성별</h2>
              <input type="radio" />
              <label>상관 없음</label>
              <input type="radio" />
              <label>남성</label>
              <input type="radio" />
              <label>여성</label>
            </div>
            <div>
              <h2>종목</h2>
              <span>중복 선택이 가능합니다.</span>
              <CheckBoxContainer>
                <CheckBox>
                  {/* <Image src={checkbox}></Image> */}
                  <span>PT</span>
                  {/* <Image src={'test'}></Image> */}
                </CheckBox>
                <CheckBox>
                  {/* <Image src={checkbox}></Image> */}
                  <span>요가</span>
                  {/* <Image src={'test'}></Image> */}
                </CheckBox>
                <CheckBox>
                  {/* <Image src={checkbox}></Image> */}
                  <span>필라테스</span>
                  {/* <Image src={'test'}></Image> */}
                </CheckBox>
                <CheckBox>
                  {/* <Image src={checkbox}></Image> */}
                  <span>발레</span>
                  {/* <Image src={'test'}></Image> */}
                </CheckBox>
              </CheckBoxContainer>
            </div>
            <div>
              <h2>목적</h2>
              <span>중복 선택이 가능합니다.</span>
              <CheckBoxContainer>
                <CheckBox>
                  {/* <Image src={checkbox}></Image> */}
                  <span>기초체력증진</span>
                </CheckBox>
                <CheckBox>
                  {/* <Image src={checkbox}></Image> */}
                  <span>다이어트</span>
                </CheckBox>
                <CheckBox>
                  {/* <Image src={checkbox}></Image> */}
                  <span>근력향상</span>
                </CheckBox>
                <CheckBox>
                  {/* <Image src={checkbox}></Image> */}
                  <span>재활</span>
                </CheckBox>
                <CheckBox>
                  {/* <Image src={checkbox}></Image> */}
                  <span>체형교정</span>
                </CheckBox>
                <CheckBox>
                  {/* <Image src={checkbox}></Image> */}
                  <span>근육량증가</span>
                </CheckBox>
              </CheckBoxContainer>
            </div>
            <div>
              <h2>가격</h2>
              <label htmlFor="optionPrice">시간 당 3만원</label>
              <input type="range" id="optionPrice" />
            </div>
            <div>
              <h2>경력</h2>
              <label htmlFor="optionCareers">경력 2년</label>
              <input type="range" id="optionCareers" />
            </div>
            <SaveButton onClick={onChangeSetState}>변경 사항 저장</SaveButton>
          </fieldset>
        </form>
      </Modal>
    </>
  )
}

export default DetailOption;