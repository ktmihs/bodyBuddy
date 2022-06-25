import styled from '@emotion/styled';

export const PostMeta = styled.div`
  display: flex;
  flex-grow: 2;
  gap: 5px;
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
  margin-bottom: 5%;
  * {
    flex-grow: 1;
  }
  button {
    height: 100%;
  }
`;
