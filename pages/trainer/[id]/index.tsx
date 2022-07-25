import type { NextPage } from 'next';
import { TrainerHeader } from '@components/layout/trainer/TrainerHeader';
import { useEffect, useState } from 'react';
import { TrainerBody } from '@components/layout/trainer/TrainerBody';
import { useRouter } from 'next/router';
import { getTrainerData } from 'api/firebase';
import NoContent from '@components/common/noContent';

const Trainer: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;

  const [trainer, setTrainer] = useState<any>();
  const [liked, setLiked] = useState(false);
  const login = 'trainer';

  useEffect(() => {
    // 트레이너 정보 받아오기
    if (typeof id === 'string') {
      const data = getTrainerData(id);
      data.then((res) => {
        if (res?.length) {
          setTrainer(res[0]);
        }
      });
    }
  }, [id]);

  // 리뷰 중, 현재 트레이너 아이디와 일치하는 리뷰 2개만 가져오기
  const reviews = [
    {
      id: 612151056,
      userId: 123456789,
      creationDate: new Date(),
      rating: 4,
      trainerId: 456789123,
      image: [],
      category: '상담',
      content: '친절하게 잘 해주셨어요~',
      isActivation: true,
    },
    {
      id: 612151757,
      userId: 123456789,
      creationDate: new Date(),
      rating: 5,
      trainerId: 456789123,
      image: ['/assets/common/profile.svg'],
      category: '상담',
      content: '친절하게 잘 해주셨어요~22',
      isActivation: true,
    },
  ];

  return trainer ? (
    <div>
      <h1 className="srOnly">{'강사이름'} 트레이너 페이지</h1>
      <TrainerHeader state={login} trainer={trainer} liked={liked} onClickSetLiked={setLiked} />
      <TrainerBody trainer={trainer} reviews={reviews} />
    </div>
  ) : (
    <NoContent title={'찾는 트레이너가 존재하지 않습니다.'} />
  );
};

export default Trainer;
