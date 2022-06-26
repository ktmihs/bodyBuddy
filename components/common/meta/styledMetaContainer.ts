import styled from '@emotion/styled';

export const PostMeta = styled.div`
  display: flex;
  gap: 5px;
  &[class~='post'],
  &[class~='comment'] {
    flex-grow: 2;
  }
  &[class~='list'] {
    color: ${({ theme }) => theme.gray};
    * {
      font-size: 16px;
    }
    span {
      font-weight: normal;
    }
    time {
      order: -1;
    }
  }

  &[class~='post'] {
    flex-direction: column;
  }

  span {
    font-weight: bold;
  }
  time {
    font-size: 14px;
    color: ${({ theme }) => theme.gray};
  }
`;

export const LikeAndCommentInfo = styled.div`
  display: flex;
  width: 20%;
  * {
    flex-grow: 1;
  }
  button {
    height: 100%;
  }
`;
