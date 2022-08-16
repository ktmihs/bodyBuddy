import { getTrainerData, updateTrainerData } from '@api/firebase';
import { FixedBottomButton } from '@components/common/button';
import { TitleBar } from '@components/common/title';
import { Edit } from '@components/layout/trainer/edit';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface resProps {
  field: string;
  purpose: string;
  address: string;
  introduction: string;
  isOnline: string;
  images: string;
  gymImage: string;
  careers: string;
  price: string;
}

const TrainerEdit = () => {
  const router = useRouter();
  const id = router.query.id;

  const [field, setField] = useState<string>('');
  const [purpose, setPurpose] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [introduction, setIntroduction] = useState<string>('');
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const [profileUrl, setProfileUrl] = useState<string>('');
  const [imagesUrl, setImagesUrl] = useState<string[]>([]);
  const [gymUrl, setGymUrl] = useState<string>('');
  const [careers, setCareers] = useState<CareerProps[]>([]);
  const [cost, setCost] = useState<string>('');

  useEffect(() => {
    // 트레이너 정보 받아오기
    if (typeof id === 'string') {
      const data = getTrainerData(id);
      data.then((res) => {
        if (res?.length) {
          const info = res[0];

          // 받아온 이미지가 3개 보다 작을 경우, 빈문자열 넣어줌
          for (let i = 0; i < 3 - info.images.length; i++) info.images.push('');

          setField(info.field);
          setPurpose(info.purpose);
          setAddress(info.address);
          setIntroduction(info.introduction);
          setIsOnline(info.isOnline);
          setProfileUrl(info.images[0]);
          setImagesUrl(info.images);
          setGymUrl(info.gymImage);
          setCareers(info.careers);
          setCost(info.price);
        }
      });
    }
  }, [id]);

  const trainerState = {
    field: field,
    purpose: purpose,
    profileUrl: profileUrl,
    imagesUrl: imagesUrl,
    gymUrl: gymUrl,
    careers: careers,
    cost: cost,
    address: address,
    introduction: introduction,
    isOnline: isOnline,
  };

  const trainerSetState = {
    setField: setField,
    setPurpose: setPurpose,
    setAddress: setAddress,
    setIntroduction: setIntroduction,
    setIsOnline: setIsOnline,
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
    if (typeof id === 'string') {
      const data = {
        field: field,
        purpose: purpose,
        address: address,
        introduction: introduction,
        isOnline: isOnline,
        images: imagesUrl,
        gymImage: gymUrl,
        careers: careers,
        price: cost,
      };
      console.log(data);
      updateTrainerData(id, data);
      window.location.href = `/trainer/${id}`;
    }
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

  return field ? (
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
