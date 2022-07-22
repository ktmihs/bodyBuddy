import { getTrainerData } from '@api/firebase';
import { FixedBottomButton } from '@components/common/button';
import { TitleBar } from '@components/common/title';
import { Edit } from '@components/layout/trainer/edit';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const TrainerEdit = () => {
  const router = useRouter();
  const id = router.query.id;

  const [newField, setNewField] = useState<string>();
  const [newPurpose, setNewPurpose] = useState<string>();
  const [address, setNewAddress] = useState<string>();
  const [introdution, setIntrodution] = useState<string>();
  const [isOnine, setIsOnine] = useState<boolean>();
  const [profileUrl, setProfileUrl] = useState<string[]>();
  const [imagesUrl, setImagesUrl] = useState<string[]>();
  const [gymUrl, setGymUrl] = useState<string[]>();
  const [careers, setCareers] = useState<CareerProps[]>();
  const [cost, setCost] = useState<string>();

  useEffect(() => {
    // 트레이너 정보 받아오기
    if (typeof id === 'string') {
      const data = getTrainerData(id);
      data.then((res) => {
        if (res?.length) {
          const {
            field,
            purpose,
            address,
            introduction,
            isOnline,
            images,
            gymImage,
            careers,
            price,
          } = res[0];
          setNewField(field);
          setNewPurpose(purpose);
          setProfileUrl(images[0]);
          setImagesUrl(images);
          setGymUrl([gymImage]);
          setCareers(careers);
          setCost(price);
        }
      });
    }
  }, [id]);

  const trainerState = {
    field: newField,
    purpose: newPurpose,
    profileUrl: profileUrl,
    imagesUrl: imagesUrl,
    gymUrl: gymUrl,
    careers: careers,
    cost: cost,
  };

  const trainerSetState = {
    setField: setNewField,
    setPurpose: setNewPurpose,
    setProfileUrl: setProfileUrl,
    setImagesUrl: setImagesUrl,
    setGymUrl: setGymUrl,
    setCareers: setCareers,
    setCost: setCost,
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

  return newField ? (
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
  ) : (
    <></>
  );
};

export default TrainerEdit;
