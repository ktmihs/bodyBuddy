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
      width: 45%;
      font-size: 14px;
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

export const CommentInfo = styled.div`
  display: flex;
  gap: 5px;
  width: 20%;
  span {
    line-height: 1.2;
  }
  * {
    font-size: 14px;
  }
`;
