import { ItemGroup } from '@components/common/ItemGroup';
import { TopButton } from '@components/common/button';
import type { NextPage } from 'next';
import Image from 'next/image';

const Community: NextPage = () => {
  return (
    <section>
      <h2 className="srOnly">커뮤니티 게시판</h2>
      <ItemGroup />
      <div>
        <article>
          <a href="community/1">
            <p>트레이너가 하체만 시켜요</p>
            <p>죽겠어요 원래 이런가요</p>
          </a>
          <time dateTime="2022-06-17T23:00">1분 전</time>
          <span>밍망디</span>
          <Image src="/assets/common/love-blank.svg" alt="좋아요" width={15} height={15}></Image>
          <span>1</span>
          <Image src="/assets/community/speech.svg" alt="댓글" width={15} height={15}></Image>
          <span>3</span>
        </article>
      </div>
      <div>
        <a href="community/posting">
          <Image src="/assets/community/pencil.svg" alt="글쓰기" width={15} height={15}></Image>
          <span>글쓰기</span>
        </a>
      </div>
      <TopButton />
    </section>
  );
};

export default Community;
