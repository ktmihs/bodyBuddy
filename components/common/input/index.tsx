import { throttle } from 'lodash';
import React, { useState } from 'react';

import { checkIsNicknameDuplicated } from 'api/firebase';
import Image from 'next/image';
import correct from '@assets/signUp/correct.svg';
import incorrect from '@assets/signUp/incorrect.svg';

export const CheckIsValidNickname = ({
  nickname,
  onSetNickname,
  isCheckNickname,
}: CheckIsValid) => {
  const [isValid, setIsValid] = useState(false);
  const [isDuplicated, setIsDuplicated] = useState(false);

  const onChangeNickName = throttle((e: React.SyntheticEvent) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    const nickname = e.target.value;
    onSetNickname(nickname);

    if (nickname.length < 1 || nickname.length >= 5) setIsValid(false);
    else {
      const reg = /[!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩\s]/g;

      if (reg.test(nickname)) {
        // 특수문자 있는 경우
        setIsValid(false);
      } else {
        setIsValid(true);
        checkDuplicated(nickname);
      }
    }
  }, 200);

  const checkDuplicated = async (nickname: string) => {
    try {
      const result = await checkIsNicknameDuplicated(nickname);
      if (!result) {
        isCheckNickname(true);
        setIsDuplicated(true);
      } else {
        setIsDuplicated(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {isValid && isDuplicated ? (
        <>
          <span className="correct-nickname">좋은 닉네임이에요!</span>
          <div className="nickname-img">
            <Image src={correct} alt="옳음" width={'17px'} height={'17px'} />
          </div>
        </>
      ) : (
        <></>
      )}

      {isValid ? (
        <></>
      ) : (
        <>
          <span className="incorrect-nickname">닉네임은 특수문자 제외 5자 이내에요.</span>
          <div className="nickname-img">
            <Image src={incorrect} alt="틀림" width={'17px'} height={'17px'} />
          </div>
        </>
      )}
      {isValid && !isDuplicated ? (
        <>
          <span className="duplicate-nickname">중복된 닉네임이 있습니다!</span>
          <div className="nickname-img">
            <Image src={incorrect} alt="틀림" width={'17px'} height={'17px'} />
          </div>
        </>
      ) : (
        <></>
      )}
      <input
        onChange={onChangeNickName}
        value={nickname || ''}
        type="text"
        placeholder="특수 문자 제외 5자 이내"
      />
    </>
  );
};
