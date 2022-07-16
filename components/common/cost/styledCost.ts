import styled from '@emotion/styled';

export const CostWrapper = styled.section`
  padding-bottom: 10px;
  position: relative;

  span {
    font-weight: 700;
    font-size: 14px;
    line-height: 34px;
    color: #797878;
  }

  span:first-of-type {
    position: absolute;
    top: 0;
    left: 15px;
  }

  span:last-of-type {
    position: absolute;
    top: 0;
    left: 315px;
  }
`;

export const CostInput = styled.div`
  input {
    box-sizing: border-box;
    width: 350px;
    height: 32px;
    background: transparent;
    border: 1px solid #cdcdcd;
    border-radius: 10px;
    text-indent: 100px;
  }
`;
