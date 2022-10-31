import { ItemGroup } from '@components/layout/community/ItemGroup';
import type { NextPage } from 'next';
import Image from 'next/image';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import PostList from '@components/layout/community/Post';
import { field } from '@data';
import { fetchPostingsByField } from '@api/firebase';
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore/lite';
import { useIntersectionObserver } from 'hooks/useInfiniteScroll';

const CommunityPage = styled.section`
  &:nth-of-type(1) {
    padding-top: 15%;
  }
`;

const PostButton = styled.div`
  position: fixed;
  bottom: calc(77px + 5%);
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 40px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.lineGray};
  border-radius: 30px;

  a {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    margin-left: 10px;
    padding: 3%;
    width: 100%;
    height: 100%;
    span {
      line-height: 2.4;
    }
    img {
    }
  }

  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const Community: NextPage = () => {
  const [selectedItem, changeSelectedItem] = useState('0');
  const [postList, setPostList] = useState<post[]>([]);
  const [startAfter, setStartAfter] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const getPostList = (field: string) => {
      return fetchPostingsByField(field, startAfter);
    };
    Promise.resolve(getPostList(field[+selectedItem])).then((result) => {
      setPostList(() => [...(result?.result as post[])]);
      setStartAfter(result ? result.key : null);
    });
  }, [selectedItem]);

  const scrollOption = {
    callback: async () => {
      if (!isLoaded && startAfter !== null) {
        setIsLoaded(true);
        const result = await fetchPostingsByField(field[+selectedItem], startAfter);
        setPostList((currentList: post[]) => [...currentList, ...(result?.result as post[])]);
        setStartAfter(result ? result.key : null);
        setIsLoaded(false);
      } else return;
    },
  };
  const intersectionObserver = useIntersectionObserver(scrollOption);

  return (
    <CommunityPage>
      <h2 className="srOnly">커뮤니티 게시판</h2>
      <ItemGroup changeSelectedItem={changeSelectedItem} />
      <PostList intersectionObserver={intersectionObserver} postList={postList} />

      <PostButton>
        <a href="community/posting">
          <Image src="/assets/community/pencil.svg" alt="글쓰기" width={15} height={15}></Image>
          <span>글쓰기</span>
        </a>
      </PostButton>
    </CommunityPage>
  );
};

export default Community;
