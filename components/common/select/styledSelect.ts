import styled from '@emotion/styled';

export const StyledSelectWrapper = styled.span`
  position: relative;
`;

export const StyledSelect = styled.button<{ width: number }>`
  width: ${({ width }) => width}px;
  height: 30px;
  border: 1px solid #b0b0b0;
  border-radius: 5px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  padding-left: 0 10px;
  align-items: center;
  font-size: 12px;
  color: ${({ theme }) => theme.purple};

  img {
  }
`;

export const StyledSelectUl = styled.ul<{ width: number }>`
  background-color: #f8f8f8;
  box-sizing: border-box;
  width: ${({ width }) => width}px;
  height: 100px;
  overflow: auto;
  padding: 2px 10px;
  font-size: 12px;
  border: 1px solid #b0b0b0;
  border-radius: 5px;
  position: absolute;

  li {
    padding: 10px 0;
    border-bottom: 1px solid ${({ theme }) => theme.lineGray};
    cursor: pointer;
  }
`;
