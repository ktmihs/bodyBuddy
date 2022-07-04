import styled from '@emotion/styled';
import { useEffect, useState, MouseEvent, useCallback, memo } from 'react';
import OptionCheckBox from '@components/common/checkbox';
import Image from 'next/image';
import { Select } from '@components/common/select';
import { city, district } from '@data';
import { Radio } from '@components/common/radio';
import { CustomRange } from '@components/common/range';

interface OptionProps {
  city: string;
  district: string;
  gender: string;
  field: string[];
  purpose: string[];
}

interface ModalProps {
  options: OptionProps;
  handleSetOptions: any;
  onChangeSetState: () => void;
}

const DetailOption = ({ options, handleSetOptions, onChangeSetState }: ModalProps) => {
  const fieldList = [
    {
      checkBox: 'PT',
      checkBoxImage: '/assets/index/option/pt.svg',
      checkBoxCheckedImage: '/assets/index/option/pt-checked.svg',
    },
    {
      checkBox: '요가',
      checkBoxImage: '/assets/index/option/yoga.svg',
      checkBoxCheckedImage: '/assets/index/option/yoga-checked.svg',
    },
    {
      checkBox: '필라테스',
      checkBoxImage: '/assets/index/option/pilates.svg',
      checkBoxCheckedImage: '/assets/index/option/pilates-checked.svg',
    },
    {
      checkBox: '발레',
      checkBoxImage: '/assets/index/option/ballet.svg',
      checkBoxCheckedImage: '/assets/index/option/ballet-checked.svg',
    },
  ];

  const purposeList = [
    {
      checkBox: '기초체력증진',
    },
    {
      checkBox: '다이어트',
    },
    {
      checkBox: '근력향상',
    },
    {
      checkBox: '재활',
    },
    {
      checkBox: '체형교정',
    },
    {
      checkBox: '근육량증가',
    },
  ];

  const {
    city: initCity,
    district: initDistrict,
    gender: initGender,
    field: initField,
    purpose: initPurpose,
  } = options;

  const [cityInfo, setCityInfo] = useState(initCity || '시/도');
  const [districtInfo, setDistrictInfo] = useState(initDistrict || '군/구');

  const [isGenderChecked, setIsGenderChecked] = useState(initGender || 'anyone');

  const [price, setPrice] = useState<number[] | number>([0, 100]);
  const [career, setCareer] = useState<number[] | number>([0, 10]);

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: 0px;
      width: 100%;`;

    return () => {
      document.body.style.cssText = '';
    };
  }, []);

  const handleGenderCheckedClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const input = e.currentTarget.querySelector('input[name=gender]');
      input && setIsGenderChecked(input.id);
    },
    [isGenderChecked]
  );

  const fieldInitialState: InitialStateProps = {};
  const purposeInitialState: InitialStateProps = {};

  fieldList.forEach((field) => {
    const { checkBox } = field;
    fieldInitialState[checkBox] = false;
  });
  initField.length &&
    initField.forEach((field) => {
      fieldInitialState[field] = true;
    });

  purposeList.forEach((purpose) => {
    const { checkBox } = purpose;
    purposeInitialState[checkBox] = false;
  });
  initPurpose.length &&
    initPurpose.forEach((purpose) => {
      purposeInitialState[purpose] = true;
    });

  const [isFieldChecked, setIsFieldChecked] = useState(fieldInitialState);
  const [isPurposeChecked, setIsPurposeChecked] = useState(purposeInitialState);

  const handleSubmitButton = () => {
    const checkedFieldList = [];
    for (const field in isFieldChecked) {
      isFieldChecked[field] && checkedFieldList.push(field);
    }

    const checkedPurposeList = [];
    for (const purpose in isPurposeChecked) {
      isPurposeChecked[purpose] && checkedPurposeList.push(purpose);
    }

    const optionList = {
      city: cityInfo,
      district: districtInfo,
      gender: isGenderChecked,
      field: checkedFieldList,
      purpose: checkedPurposeList,
      price: price,
      career: career,
    };

    handleSetOptions(optionList);
    onChangeSetState();
  };

  const Modal = styled.div`
    width: 390px;
    height: 100%;
    background-color: #fff;
    position: fixed;
    overflow: scroll;
    z-index: 1000;
    text-align: center;
    &::-webkit-scrollbar {
      display: none;
    }

    form {
      margin: 0 20px;
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
    cursor: pointer;
  `;

  const FormSection = styled.section`
    margin-bottom: 10px;
    position: relative;

    h2 {
      text-align: left;
      font-weight: 700;
      font-size: 16px;
      line-height: 31px;
    }

    .section-descript {
      position: absolute;
      top: 0;
      font-weight: 700;
      font-size: 8px;
      line-height: 31px;
      color: #8b8b8b;
      left: 45px;
    }
  `;

  const PositionList = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 8px;
  `;

  const SaveButton = styled.button`
    width: 335px;
    height: 47px;
    background: ${(props) => props.theme.purple};
    border-radius: 10px;
    color: #fff;
    border: none;
    cursor: pointer;
    text-align: center;
    margin-top: 10px;
    font-weight: 500;
    font-size: 17px;
    line-height: 25px;
    margin-bottom: 22px;
  `;

  return (
    <>
      <Modal>
        <ModalTitle>
          <h2>상세 옵션</h2>
          <CloseButton onClick={onChangeSetState}>
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
            <FormSection>
              <h2>위치</h2>
              <PositionList>
                <Select
                  currentSelectedData={cityInfo}
                  onSetCurrentSelected={setCityInfo}
                  selectData={city}
                  selectWidth={150}
                />
                <Select
                  currentSelectedData={districtInfo}
                  onSetCurrentSelected={setDistrictInfo}
                  selectData={cityInfo === '시/도' ? ['시/도를 선택해주세요'] : district[cityInfo]}
                  selectWidth={190}
                />
              </PositionList>
            </FormSection>
            <FormSection>
              <h2>성별</h2>
              <Radio
                notSelected={true}
                isChecked={isGenderChecked}
                handleClick={handleGenderCheckedClick}
              />
            </FormSection>
            <FormSection>
              <h2>종목</h2>
              <span className="section-descript">중복 선택이 가능합니다.</span>
              <OptionCheckBox
                checkBoxList={fieldList}
                isChecked={isFieldChecked}
                handleClickSetIsChecked={setIsFieldChecked}
              />
            </FormSection>
            <FormSection>
              <h2>목적</h2>
              <span className="section-descript">중복 선택이 가능합니다.</span>
              <OptionCheckBox
                checkBoxList={purposeList}
                isChecked={isPurposeChecked}
                handleClickSetIsChecked={setIsPurposeChecked}
              />
            </FormSection>
            <FormSection>
              <h2>가격</h2>
              <CustomRange
                type={'만원'}
                range={price}
                onChangeSetRange={setPrice}
                min={0}
                max={100}
              />
            </FormSection>
            <FormSection>
              <h2>경력</h2>
              <CustomRange
                type={'년'}
                range={career}
                onChangeSetRange={setCareer}
                min={0}
                max={10}
              />
            </FormSection>
            <SaveButton onClick={handleSubmitButton}>변경 사항 저장</SaveButton>
          </fieldset>
        </form>
      </Modal>
    </>
  );
};

export default memo(DetailOption);
