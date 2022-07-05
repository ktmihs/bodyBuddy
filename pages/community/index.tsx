import { ItemGroup } from '@components/common/itemgroup';
import type { NextPage } from 'next';
import Image from 'next/image';
import styled from '@emotion/styled';
import { useState } from 'react';
import PostList from '@components/layout/community/Post';

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
      /* background-color: pink; */
    }
    img {
      /* background-color: red; */
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

  return (
    <CommunityPage>
      <h2 className="srOnly">커뮤니티 게시판</h2>
      <ItemGroup changeSelectedItem={changeSelectedItem} />
      <PostList selectedItem={selectedItem} />
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
