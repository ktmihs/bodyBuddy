import { FixedBottomButton } from '@components/common/button';
import { TitleBar } from '@components/common/title';
import { Edit } from '@components/layout/trainer/edit';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useState } from 'react';

const TrainerEdit = () => {
  // trainer 정보 받아와서 초기값 저장
  const id = 1;
  const field = 'PT';
  const purpose = '다이어트';
  const images = ['/assets/common/profile.svg', '/assets/common/profile.svg'];
  if (images.length < 3) for (let i = 0; i < 3 - images.length; i++) images.push('');
  const gymImage = '/assets/common/profile.svg';

  const [newField, setNewField] = useState(field || '');
  const [newPurpose, setNewPurpose] = useState(purpose || '');
  const [profileUrl, setProfileUrl] = useState<string>(images[0]);
  const [imagesUrl, setImagesUrl] = useState<string[]>(images);
  const [gymUrl, setGymUrl] = useState<string[]>([gymImage || '']);

  const trainerState = {
    field: newField,
    purpose: newPurpose,
    profileUrl: profileUrl,
    imagesUrl: imagesUrl,
    gymUrl: gymUrl,
  };

  const trainerSetState = {
    setField: setNewField,
    setPurpose: setNewPurpose,
    setProfileUrl: setProfileUrl,
    setImagesUrl: setImagesUrl,
    setGymUrl: setGymUrl,
  };

  const left = {
    link: `/trainer/${id}`,
    src: '/assets/common/arrow-left-purple.svg',
    alt: '뒤로가기',
  };

  const right = {
    link: '',
    src: '/assets/common/button-delete.svg',
    alt: '회원탈퇴',
  };

  const handleButtonClick = () => {
    // 트레이너 정보 수정하기
    window.location.href = `/trainer/${id}`;
  };

  const Withdraw = styled.div`
    position: relative;
    width: 73px;
    height: 22px;
    left: 290px;
    top: -63px;
    background: #ffffff;
    border: 1px solid #b0b0b0;
    color: #b0b0b0;
    font-size: 11px;
    line-height: 22px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
  `;

  return (
    <>
      <h2 className="srOnly">내 정보</h2>
      <TitleBar left={left} right={right} centerTitle={'내 정보'} />
      <Link href={`/profile/${id}/withdraw`}>
        <Withdraw>회원탈퇴</Withdraw>
      </Link>
      <Edit trainerState={trainerState} trainerSetState={trainerSetState} />
      <FixedBottomButton
        isValid
        onButtonEvent={handleButtonClick}
        buttonType={'button'}
        buttonTitle={'변경 사항 저장'}
      />
    </>
  );
};

export default TrainerEdit;
