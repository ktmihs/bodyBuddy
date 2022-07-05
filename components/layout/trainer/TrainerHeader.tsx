import Image from 'next/image';
import { TitleBar } from '@components/common/title';

import profile from '@assets/common/profile.svg';
import loveBlank from '@assets/trainer/love-blank.svg';
import love from '@assets/trainer/love.svg';
import setting from '@assets/common/setting-white.svg';
import styled from '@emotion/styled';

export const TrainerHeader = ({ state, liked, onClickSetLiked }: HeaderProps) => {
  const id = 1234;
  const edit = {
    // 강사로 로그인됐을 경우에만,
    link: `${id}/edit`,
    src: setting,
    alt: '수정페이지로 이동하기',
    height: 30,
    right: 30,
  };
  const likedObj = {
    liked: love,
    unLiked: loveBlank,
    likedAlt: '관심 트레이너 설정하기',
    unLikedAlt: '관심 트레이너 해제하기',
  };

  const trainerImg = ''; // 트레이너로부터 이미지 받아오기

  const handleClick = () => {
    onClickSetLiked((state: boolean) => !state);
  };

  const HeaderWrapper = styled.section`
    background: url('/assets/trainer/trainer-background.svg') no-repeat;
    background-size: 390px auto;
  `;

  const LikedWrapper = styled.div`
    box-sizing: border-box;
    height: 110px;
    padding-right: 20px;
    padding-top: 50px;

    div {
      float: right;
      box-sizing: border-box;
      width: 40px;
      height: 40px;
      border: 1px solid #fff;
      border-radius: 20px;
      padding: 6px;
      cursor: pointer;
    }
  `;

  const TrainerIntro = styled.p`
    color: #fff;
    font-size: 17px;
    line-height: 21px;
    height: 40px;
    margin-left: 24px;

    &::before {
      content: url('/assets/trainer/trainer-intro.svg');
      position: absolute;
      top: 60px;
      left: 24px;
    }
  `;

  const TrainerProfile = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const ImageWrapper = styled.div`
    box-sizing: border-box;
    margin: 20px 0 20px 40px;
    width: 150px;
    height: 150px;
  `;

  const TrainerInfo = styled.div`
    width: 190px;
    margin-top: 60px;
  `;

  const TrainerName = styled.div`
    font-size: 12px;
    line-height: 18px;
    color: #464646;
  `;

  const FieldAndPurpose = styled.div`
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #464646;

    span:first-of-type::after {
      content: '|';
      display: inline-block;
      margin: 0 4px;
    }
  `;

  const OnlineState = styled.div`
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #7d7c7c;

    div {
      color: #fff;
      display: inline-block;
      background: linear-gradient(180deg, #858ff1 0%, #70b4e0 100%);
      border-radius: 44px;
      width: 26px;
      text-align: center;
    }
  `;

  const Button = styled.button`
    position: relative;
    width: 152px;
    height: 32px;
    background: #858ff1;
    border-radius: 10px;
    color: #fff;
    border: none;
    font-weight: 800;
    font-size: 14px;
    line-height: 32px;
    margin: 5px 0;
    padding-left: 20px;

    &::before {
      content: url('/assets/trainer/chat.svg');
      position: relative;
      left: -20px;
      top: 4px;
    }
  `;

  return (
    <HeaderWrapper>
      <header>
        <h2 className="srOnly">강사 프로필</h2>
        <div>
          {state === 'user' ? (
            <LikedWrapper>
              <div onClick={handleClick}>
                {liked ? (
                  <Image src={likedObj.liked} alt={likedObj.likedAlt} height={30} width={30} />
                ) : (
                  <Image src={likedObj.unLiked} alt={likedObj.unLikedAlt} height={30} width={30} />
                )}
              </div>
            </LikedWrapper>
          ) : (
            <TitleBar right={edit} />
          )}
        </div>
        <TrainerIntro>
          다이어트, 매번 어려우셨나요?
          <br /> 이번엔 쉬운 길을 선택하세요.
        </TrainerIntro>
        <TrainerProfile>
          <ImageWrapper>
            <Image src={trainerImg ? trainerImg : profile} alt="강사" width={150} height={150} />
          </ImageWrapper>
          <TrainerInfo>
            <TrainerName>최세민 트레이너</TrainerName>
            <FieldAndPurpose>
              <span>PT</span>
              <span>다이어트</span>
            </FieldAndPurpose>
            {state === 'user' ? (
              <div>
                <Button>상담 하기</Button>
              </div>
            ) : (
              <OnlineState>
                현재 <div>Off</div> 상태입니다.
              </OnlineState>
            )}
          </TrainerInfo>
        </TrainerProfile>
      </header>
    </HeaderWrapper>
  );
};
