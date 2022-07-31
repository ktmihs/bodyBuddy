import styled from '@emotion/styled';

export const ReviewGroup = styled.div`
  margin-left: 20px;
  padding: 1%;
`;

export const Reveiw = styled.article`
  width: 90%;
  border-top: 1px solid ${({ theme }) => theme.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  padding: 5% 0;
  & > div:nth-of-type(1) {
    display: flex;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  gap: 5px;
  margin-left: 10px;
  time,
  span {
    font-size: 14px;
  }
  div:nth-of-type(1) {
    flex-grow: 1;
  }

  div:nth-of-type(2) {
    margin-left: 0;
  }
`;

export const MainText = styled.div`
  margin: 3% 0;
  img {
    border-radius: 15px;
  }
  p {
    font-size: 14px;
    margin: 10px 0;
    line-height: 1.3;
  }
`;

export const TrainerInfo = styled.div`
  padding: 15px 0;
  span {
    font-size: 14px;
    margin-right: 15px;
  }

  span:nth-of-type(2) {
    background-color: ${({ theme }) => theme.purple};
    color: white;
    padding: 2%;
    border-radius: 15px;
  }
`;
