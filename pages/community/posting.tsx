import { FixedBottomButton } from '@components/common/button';
import { ItemGroup } from '@components/common/itemgroup';
import { TitleBar } from '@components/common/title';
import { ImageUploader } from '@components/common/uploader';
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import { debounce } from 'lodash';
import { field } from '@data';
import Router, { useRouter } from 'next/router';
import { addComuunityPosting } from 'api/firebase';

const PostingForm = styled.form`
  margin: 0 5%;
  button {
    left: 0;
  }
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
  const router = useRouter();
  let { edited } = router.query;
  edited = edited ? JSON.parse(edited) : null;

  const userId = '그만먹고싶닭';

  const [selectedItem, changeSelectedItem] = useState('0');
  const [isValid, changeValidState] = useState(edited ? true : false);

  const title = useRef(null);
  const mainText = useRef(null);

  const initalizeUrl = () =>
    ['', '', ''].map((blank, index) =>
      edited && edited.images && edited.images[index] ? edited.images[index] : blank
    );

  const [url, setImageUrl] = useState<string[]>(initalizeUrl());

  const uploadPost = async () => {
    const newPost = {
      content: mainText.current.value,
      creationDate: edited ? edited.creationDate : new Date(),
      fieldId: field[+selectedItem],
      images: url,
      title: title.current.value,
      totalComments: 0,
      userId: userId,
    };
    // 서버로 post/update 요청
    try {
      await addComuunityPosting(newPost);
      Router.push('/community');
    } catch (e) {
      console.log(e);
    }
  };

  const handleTextChange = debounce(() => {
    mainText.current.value && title.current.value
      ? changeValidState(true)
      : changeValidState(false);
  }, 300);

  const left = { link: '/community', src: '/assets/common/back-black.svg', alt: '뒤로가기' };
  return (
    <section>
      <h2 className="srOnly">게시물 작성하기</h2>
      <TitleBar left={left} centerTitle="게시물 작성" />
      <ItemGroup changeSelectedItem={changeSelectedItem} />
      <PostingForm>
        <fieldset>
          <legend className="srOnly">작성 중인 게시물</legend>
          <PostingTitle
            name="title"
            defaultValue={edited ? edited.title : ''}
            ref={title}
            onChange={handleTextChange}
            maxLength={14}
          ></PostingTitle>
          <MainText>
            <textarea
              name="mainText"
              defaultValue={edited ? edited.content : ''}
              ref={mainText}
              onChange={handleTextChange}
            ></textarea>
            <ImageUploader url={url} setImageUrl={setImageUrl} />
          </MainText>
        </fieldset>
        <FixedBottomButton
          isValid={isValid}
          buttonType="button"
          onButtonEvent={uploadPost}
          buttonTitle={'작성 완료'}
        />
      </PostingForm>
    </section>
  );
};

export default Posting;
