import { FixedBottomLinkButton } from '@components/common/button';
import { ItemGroup } from '@components/common/itemgroup/ItemGroup';
import { TitleBar } from '@components/common/title';
import { ImageUploader } from '@components/common/uploader';
import type { NextPage } from 'next';

const Posting: NextPage = () => {
  const left = { link: '/community', src: '/assets/common/back-black.svg', alt: '뒤로가기' };
  return (
    <section>
      <h2 className="srOnly">게시물 작성하기</h2>
      <TitleBar left={left} centerTitle="게시물 작성" />
      <ItemGroup />
      <div>
        <input className="postTitle"></input>
        <div>
          <textarea></textarea>
          <ImageUploader />
        </div>
      </div>
      <FixedBottomLinkButton isValid={true} link={'/community'} buttonTitle={'작성 완료'} />
    </section>
  );
};

export default Posting;
