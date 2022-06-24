import styled from '@emotion/styled';

export const StyledItemGroup = styled.div`
  margin-bottom: 50px;
  ul {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    gap: 10px;
    padding-left: 5%;
  }

  li {
    width: 18%;
    padding: 2%;
    font-size: 13px;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.lineGray};
    border-radius: 15px;
    cursor: pointer;
  }
  .active {
    color: ${({ theme }) => theme.purple};
    background: ${({ theme }) => theme.lightPurple};
  }
`;
