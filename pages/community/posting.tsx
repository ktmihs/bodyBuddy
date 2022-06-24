import { FixedBottomLinkButton } from '@components/common/button';
import { ItemGroup } from '@components/common/itemgroup/ItemGroup';
import { TitleBar } from '@components/common/title';
import { ImageUploader } from '@components/common/uploader';
import type { NextPage } from 'next';
import styled from '@emotion/styled';

const PostingForm = styled.form`
  margin: 0 5%;
`;

const PostingTitle = styled.input`
  width: 94%;
  padding: 3%;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.lineGray};
  margin-bottom: 15px;
`;

const MainText = styled.div`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.lineGray};
  height: 400px;

  textarea {
    width: 90%;
    height: 50%;
    padding: 2% 2% 0% 5%;
    margin: 15px 0;
    border: none;
    resize: none;
  }
`;

const Posting: NextPage = () => {
  const left = { link: '/community', src: '/assets/common/back-black.svg', alt: '뒤로가기' };
  return (
    <section>
      <h2 className="srOnly">게시물 작성하기</h2>
      <TitleBar left={left} centerTitle="게시물 작성" />
      <ItemGroup />
      <PostingForm>
        <fieldset>
          <legend className="srOnly">작성 중인 게시물</legend>
          <PostingTitle maxLength={16}></PostingTitle>
          <MainText>
            <textarea></textarea>
            <ImageUploader />
          </MainText>
        </fieldset>
      </PostingForm>
      <FixedBottomLinkButton isValid={true} link={'/community'} buttonTitle={'작성 완료'} />
    </section>
  );
};

export default Posting;
