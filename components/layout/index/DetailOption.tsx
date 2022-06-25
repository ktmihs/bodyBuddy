import styled from '@emotion/styled';
import { useEffect } from 'react';
import { OptionCheckBox } from '@components/common/checkbox';
import Image from 'next/image';

const DetailOption = ({ isModalState, onChangeSetState }: any) => {
  const fieldList = [
    {
      checkBoxItemID: '123',
      checkBoxText: 'PT',
      checkBoxImage: '/assets/index/option/pt.svg',
      checkBoxCheckedImage: '/assets/index/option/pt-checked.svg',
    },
    {
      checkBoxItemID: '124',
      checkBoxText: '요가',
      checkBoxImage: '/assets/index/option/yoga.svg',
      checkBoxCheckedImage: '/assets/index/option/yoga-checked.svg',
    },
    {
      checkBoxItemID: '125',
      checkBoxText: '필라테스',
      checkBoxImage: '/assets/index/option/pilates.svg',
      checkBoxCheckedImage: '/assets/index/option/pilates-checked.svg',
    },
    {
      checkBoxItemID: '126',
      checkBoxText: '발레',
      checkBoxImage: '/assets/index/option/ballet.svg',
      checkBoxCheckedImage: '/assets/index/option/ballet-checked.svg',
    },
  ];

  const purposeList = [
    {
      checkBoxItemID: '1123',
      checkBoxText: '기초체력증진',
    },
    {
      checkBoxItemID: '1124',
      checkBoxText: '다이어트',
    },
    {
      checkBoxItemID: '1125',
      checkBoxText: '근력향상',
    },
    {
      checkBoxItemID: '1126',
      checkBoxText: '재활',
    },
    {
      checkBoxItemID: '1127',
      checkBoxText: '체형교정',
    },
    {
      checkBoxItemID: '1128',
      checkBoxText: '근육량증가',
    },
  ];

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

    form {
      /* margin: 0 20px; */
    }
  `;

  const ModalTitle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 22px;
    align-items: center;

    &::before {
      content: '';
      display: inline-block;
      width: 11px;
    }

    h2 {
      font-weight: 700;
      font-size: 18px;
      line-height: 31px;
    }
  `;

  const CloseButton = styled.button`
    display: inline-block;
    background-color: transparent;
    border: none;
  `;

  const SaveButton = styled.button`
    width: 335px;
    height: 47px;
    background: #858ff1;
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

  return (
    <>
      <Modal>
        <ModalTitle>
          <h2>상세 옵션</h2>
          <CloseButton onClick={() => onChangeSetState(!isModalState)}>
            <Image
              src="/assets/common/closeButton.svg"
              alt="상세 옵션 닫기"
              width={11}
              height={13}
            />
          </CloseButton>
        </ModalTitle>
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
              <OptionCheckBox checkBoxList={fieldList} />
            </div>
            <div>
              <h2>목적</h2>
              <span>중복 선택이 가능합니다.</span>
              <OptionCheckBox checkBoxList={purposeList} />
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
  );
};

export default DetailOption;
