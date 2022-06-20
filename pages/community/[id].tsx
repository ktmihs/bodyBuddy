import { TitleBar } from '@components/common/title';
import Image from 'next/image';
import type { NextPage } from 'next';

const PostingDetail: NextPage = () => {
  const left = { link: '/community', src: '/assets/common/back-black.svg', alt: '뒤로가기' };
  return (
    <section>
      <h2 className="srOnly">게시물 보기</h2>
      <TitleBar left={left} centerTitle="PT 게시판" />
      <div>
        <Image src="/assets/common/profile.svg" alt="프로필" width="50" height="50" />
        <span>밍망디</span>
        <time dateTime="2022-06-17T23:00">1분 전</time>
        <div>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>
      <div>
        <p>트쌤한테</p>
        <p>먹을 거 줘도 돼요? 요만한 건데</p>
        <Image src="/assets/community/blank.svg" alt="첨부한 사진" width="300" height="300" />
        <div>
          <button>좋아요</button>
          <span>1</span>
          <Image src="/assets/community/speech.svg" alt="댓글" width={15} height={15}></Image>
          <span>3</span>
        </div>
      </div>
      <div>
        <h3>댓글</h3>
        <article>
          <Image src="/assets/common/profile.svg" alt="프로필" width="30" height="30" />
          <span>길에서 숨쉰 채 발견</span>
          <p>염분기 없는 닭가슴살이면 ㄱㅊ</p>
          <time dateTime="2022-06-17T23:00">1분 전</time>
          <div>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PostingDetail;
