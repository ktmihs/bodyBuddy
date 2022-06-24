import styled from '@emotion/styled';

const CheckBoxContainer = styled.section`
  padding: 10px 0;
`;

const CheckBoxContentWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 164px;
  height: 43px;
  background: #FFFFFF;
  border: 1px solid #CDCDCD;
  border-radius: 5px;
  margin-bottom: 10px;
  
  &.checked {
    background-color: #F4F5FF;
    border-color: #858FF1;
  }

  &.checked span {
    color: #858FF1;
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

export {
  CheckBoxContainer, CheckBoxContentWrapper, CheckBoxContent, CheckedIconWrapper
}