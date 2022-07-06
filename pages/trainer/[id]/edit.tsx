import { TitleBar } from '@components/common/title';
import { Edit } from '@components/layout/trainer/edit';
import styled from '@emotion/styled';
import Link from 'next/link';

const TrainerEdit = () => {
  const id = 1;

  const gymImage = '/assets/common/profile.svg';
  const images = ['/assets/common/profile.svg', '/assets/common/profile.svg'];

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

  const Withdraw = styled.div`
    position: absolute;
    width: 73px;
    height: 22px;
    left: 290px;
    top: 38px;
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
      <Edit field={'필라테스'} purpose={'체력 증진'} images={images} gymImage={gymImage} />
    </>
  );
};

export default TrainerEdit;
