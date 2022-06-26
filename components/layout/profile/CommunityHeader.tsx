import styled from '@emotion/styled';
import Link from 'next/link';

const StyledCommunityHeader = styled.ul<{ current: string }>`
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  display: flex;

  .posts,
  .comments {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 43px;

    a {
      text-decoration: none;
    }
  }

  .posts {
    background-color: ${({ current }) => (current === 'posts' ? '#F4F5FF' : '')};

    a {
      color: ${({ current }) => (current === 'posts' ? '#858FF1' : '#464646')};
    }
  }

  .comments {
    background-color: ${({ current }) => (current === 'comments' ? '#F4F5FF' : '')};

    a {
      color: ${({ current }) => (current === 'comments' ? '#858FF1' : '#464646')};
    }
  }
`;

const CommunityHeader = ({ current, id }: { current: string; id: number }) => {
  return (
    <StyledCommunityHeader current={current}>
      <li className="posts">
        <Link href={`/profile/posts/${id}`}>
          <a>게시글</a>
        </Link>
      </li>
      <li className="comments">
        <Link href={`/profile/comments/${id}`}>
          <a>댓글</a>
        </Link>
      </li>
    </StyledCommunityHeader>
  );
};

export default CommunityHeader;
