import styled from '@emotion/styled';

export const StyledBack = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
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
  padding: 0 10px;
  align-items: center;
  font-size: 12px;
  color: ${({ theme }) => theme.purple};

  img {
  }
`;

export const StyledSelectUl = styled.ul<{ width: number }>`
  z-index: 100;
  background-color: #f8f8f8;
  box-sizing: border-box;
  width: ${({ width }) => width}px;
  max-height: 100px;
  overflow: auto;
  font-size: 12px;
  border: 1px solid #b0b0b0;
  border-radius: 5px;
  position: absolute;

  li {
    padding: 10px 7px;
    border-bottom: 1px solid ${({ theme }) => theme.lineGray};
    cursor: pointer;
  }

  li:hover {
    background-color: ${({ theme }) => theme.purple};
    color: white;
  }
`;

export const StyledCityDistrictSelect = styled.div`
  display: flex;

  span:first-of-type {
    margin-right: 10px;
  }
`;
