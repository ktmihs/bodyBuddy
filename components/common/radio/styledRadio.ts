import styled from '@emotion/styled';

export const RadioWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 100%;
    text-align: left;
    font-weight: 700;
    font-size: 14px;
    line-height: 31px;
  }

  input {
    width: 16px;
  }
`;

export const CheckedIconWrapper = styled.div`
  position: absolute;
  width: 22px;
  background-color: #fff;
  line-height: 35px;
`;
