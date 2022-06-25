import styled from '@emotion/styled';

const CheckBoxContainer = styled.section`
  padding: 10px 0;
`;

const CheckBoxContentWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 164px;
  height: 43px;
  background: #ffffff;
  border: 1px solid #cdcdcd;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;

  &.checked {
    background-color: #f4f5ff;
    border-color: #858ff1;
  }

  &.checked span {
    color: #858ff1;
  }

  & > h2 {
    display: inline;
    background-color: aqua;
  }

  span {
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    line-height: 43px;
    color: #464646;
  }

  &:nth-of-type(2n) {
    margin-left: 10px;
  }
`;

const CheckedIconWrapper = styled.div`
  display: inline-block;
  margin: 5px 0 0 5px;
`;

const CheckBoxContent = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
`;

export { CheckBoxContainer, CheckBoxContentWrapper, CheckBoxContent, CheckedIconWrapper };
