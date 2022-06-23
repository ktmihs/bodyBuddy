import styled from '@emotion/styled';

const CheckBoxContainer = styled.section`
  padding: 10px 0;
`;

const CheckBoxContent = styled.div`
  display: inline-block;
  width: 164px;
  height: 43px;
  background: #FFFFFF;
  border: 1px solid #CDCDCD;
  border-radius: 5px;
  margin-bottom: 10px;

  & > h2 {
    display: inline;
    background-color: aqua;
  }

  span {
    display: inline-block;
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    line-height: 43px;
    color: #464646;
    padding: 0 17px;
  }

  &:nth-of-type(2n){
    margin-left: 10px;
  }
`;

export {
  CheckBoxContainer, CheckBoxContent
}