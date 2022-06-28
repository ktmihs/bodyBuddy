import Image from 'next/image';
import profile from '@assets/common/profile.svg';

const TrainerEdit = () => {
  return (
    <>
      <h2 className="srOnly">내 정보</h2>
      <header>내정보</header>
      <main>
        <div>
          <Image src={profile} alt="썸네일" />
        </div>
        <section>
          <h2>상세 정보</h2>
          <section>
            <h3>종목 및 분야</h3>
            <div>
              <div>종목 select</div>
              <div>분야 select</div>
            </div>
          </section>
          <section>
            <h3>프로필 사진</h3>
            <p></p>
            <div>
              <div>종목 select</div>
              <div>분야 select</div>
            </div>
          </section>
        </section>
        <section>
          <h2>트레이닝장 정보</h2>
          <section>
            <h3>트레이닝장 사진</h3>
            <div>
              <div>트레이닝장 사진들</div>
            </div>
          </section>
          <section>
            <h3>트레이닝장 위치</h3>
            <div>
              <div>검색엔진</div>
              <div>트레이닝장 위치</div>
            </div>
          </section>
        </section>
        <section>
          <h2>경력 정보</h2>
        </section>
        <button>변경 사항 저장</button>
      </main>
    </>
  );
};

export default TrainerEdit;
