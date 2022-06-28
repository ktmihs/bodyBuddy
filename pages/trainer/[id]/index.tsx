import Image from 'next/image';
import profile from '@assets/common/profile.svg';

import type { NextPage } from 'next';
import { TrainerHeader } from '@components/layout/trainer/trainerHeader';
import { useState } from 'react';

const Trainer: NextPage = () => {
  const [liked, setLiked] = useState(false);
  return (
    <div>
      <TrainerHeader state={'user'} liked={liked} onClickSetLiked={setLiked} />
      <main>
        <section>
          <h2>자격 및 수상 경력</h2>
          <ul>
            <li>아주대학교 축구부 졸업</li>
            <li>에버랜드 아마존 소울리스 출신</li>
          </ul>
        </section>
        <section>
          <h2>후기</h2>
          {/* <div>작성된 후기가 없습니다.</div> */}
          <ul>
            <li>아주대학교 축구부 졸업</li>
            <li>에버랜드 아마존 소울리스 출신</li>
          </ul>
        </section>
        <section>
          <h2>위치</h2>
          <div>서울 강남구 강남대로 364 미왕빌딩 11층</div>
          {/* 지도 가져오기 */}
        </section>
        <section>
          <h2>사진</h2>
          <div>
            <Image src={profile} alt={'강사 사진'} />
            <Image src={profile} alt={'강사 사진'} />
            <Image src={profile} alt={'강사 사진'} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Trainer;
