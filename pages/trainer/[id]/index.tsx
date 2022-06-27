import { TitleBar } from '@components/common/title';
import Image from 'next/image';
import profile from '@assets/common/profile.svg';

const Trainer = () => {
  const edit = {
    // 강사로 로그인됐을 경우에만,
    link: '[id]/edit',
    src: 'setting img',
    alt: '수정페이지로 이동하기',
  };
  const liked = {
    liked: 'liked img',
    unLiked: 'unliked img',
    likedAlt: '관심 트레이너 설정하기',
    unLikedAlt: '관심 트레이너 해제하기',
  };

  return (
    <div>
      {/* <TitleBar right={edit} />
      <div>하트 아이콘</div> */}
      <header>
        <p>다이어트, 매번 어려우셨나요?</p>
        <Image src={profile} alt="강사" />
        <section>
          <div>최세민 트레이너</div>
          <div>PT | 다이어트</div>
          {/* <div>현재 off 상태입니다.</div> */}
          <div>
            <button>상담 하기</button>
          </div>
        </section>
      </header>
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
