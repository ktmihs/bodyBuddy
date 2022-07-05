import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

import { FixedBottomLinkButton } from '@components/common/button';
import { Select } from '@components/common/select';
import StepHeader from '@components/layout/signUp/StepHeader';
import { city, district } from '@data';

import correct from '@assets/signUp/correct.svg';
import incorrect from '@assets/signUp/incorrect.svg';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { checkIsNicknameDuplicated } from 'api/firebase';

const StyledStep = styled.div`
  margin: 40px 0 0 21px;

  label {
    display: block;
    margin-bottom: 10px;
  }

  .nickname {
    margin-bottom: 20px;
    position: relative;

    .correct-nickname,
    .duplicate-nickname,
    .incorrect-nickname {
      position: absolute;
      top: 3px;
      right: 30px;
      font-size: 12px;
    }

    .correct-nickname {
      color: #0088e0;
    }

    .duplicate-nickname,
    .incorrect-nickname {
      color: #f90c0c;
    }

    .both {
      top: -12px;
    }

    .nickname-img {
      position: absolute;
      top: 34px;
      right: 39px;
    }

    input {
      width: 321px;
      padding: 8px;
      border-radius: 10px;
      border: 1px solid ${({ theme }) => theme.lineGray};
    }
  }

  .interestedArea {
    .interestedArea-select {
      display: flex;

      span:first-of-type {
        margin-right: 10px;
      }
    }
  }
`;

const Step1 = () => {
  const [cityInfo, setCityInfo] = useState('시/도');
  const [districtInfo, setDistrictInfo] = useState('군/구');
  const [nickname, setNickname] = useState(false);
  const [isduplicated, setIsDuplicated] = useState(false);
  // const userInfo = useSelector((state: RootState) => state.userInfo);

  const onChangeNickName = (e: React.SyntheticEvent) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    const nickname = e.target.value;
    if (nickname.length < 1 || nickname.length >= 5) setNickname(false);
    else {
      const reg = /[!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩\s]/g;
      if (reg.test(nickname)) {
        // 특수문자 있는 경우
        setNickname(false);
      } else {
        setNickname(true);
        checkDuplicated(nickname);
      }
    }
  };

  const checkDuplicated = async (nickname: string) => {
    try {
      const result = await checkIsNicknameDuplicated(nickname);
      if (!result) {
        setIsDuplicated(true);
      } else {
        setIsDuplicated(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form>
      <StepHeader
        mainAgent={'member'}
        titleStageNumber={1}
        subTitleStageComment={'간단한 기본 정보를 입력해주세요 :)'}
      />
      <StyledStep>
        <div className="nickname">
          <label>닉네임</label>
          {nickname && isduplicated ? (
            <span className="correct-nickname">좋은 닉네임이에요!</span>
          ) : (
            <></>
          )}
          {nickname ? (
            <></>
          ) : (
            <span className="incorrect-nickname">닉네임은 특수문자 제외 5자 이내에요.</span>
          )}
          {nickname && !isduplicated ? (
            <span className="duplicate-nickname">중복된 닉네임이 있습니다!</span>
          ) : (
            <></>
          )}

          <div className="nickname-img">
            <Image src={correct} alt="옳음" width={'17px'} height={'17px'} />
          </div>
          <input onChange={onChangeNickName} type="text" placeholder="특수 문자 제외 5자 이내" />
        </div>
        <div className="interestedArea">
          <label>관심 지역</label>
          <div className="interestedArea-select">
            <Select
              currentSelectedData={cityInfo}
              onSetCurrentSelected={setCityInfo}
              selectData={city}
              selectWidth={100}
            />
            <Select
              currentSelectedData={districtInfo}
              onSetCurrentSelected={setDistrictInfo}
              selectData={
                districtInfo === '군/구' ? ['시/도를 선택해주세요'] : district[districtInfo]
              }
              selectWidth={150}
            />
          </div>
        </div>
      </StyledStep>
    </form>
  );
};

export default Step1;
