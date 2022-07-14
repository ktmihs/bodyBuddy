import styled from '@emotion/styled';
import Link from 'next/link';

import background from '@assets/signUp/checkCategoryBack.svg';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const StyledCheckCategory = styled.div`
  .greeting {
    position: absolute;
    font-size: 55px;
    font-weight: 700;
    top: 14%;
    right: 20px;

    div {
      margin-bottom: 10px;
    }

    .name {
      color: ${({ theme }) => theme.purple};
    }
  }

  .back {
    background-image: url(${background.src});
    width: 141px;
    height: 498px;
    background-size: cover;
    z-index: 0;
  }

  .button {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;

    span {
      display: block;
      margin-bottom: 10px;
      color: #5a5858;
      font-size: 14px;
    }

    a:first-of-type {
      margin-bottom: 10px;
    }
  }
`;

const StyledLinkButton = styled.a<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #${({ color }) => color};
  color: white;
  font-size: 29px;
  cursor: pointer;
  width: 329px;
  height: 114px;
  border-radius: 10px;
`;

const CheckCategory = () => {
  const userInfo = useSelector((state: RootState) => state.userInfo.value);
  return (
    <StyledCheckCategory>
      <div className="greeting">
        <div>
          <span className="name">{userInfo.name}</span>님
        </div>
        <div>반갑습니다</div>
      </div>
      <div className="button">
        <span>회원가입 유형을 선택해주세요 {`:)`}</span>
        <Link href="/signUp/member">
          <StyledLinkButton color="70B4E0">일반 회원</StyledLinkButton>
        </Link>
        <Link href="/signUp/trainer/step1">
          <StyledLinkButton color="858FF1">트레이너</StyledLinkButton>
        </Link>
      </div>
      <div className="back" />
    </StyledCheckCategory>
  );
};

export default CheckCategory;
