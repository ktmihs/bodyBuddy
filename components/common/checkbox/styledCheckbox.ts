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
  border: 1px solid ${(props) => props.theme.lineGray};
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;

  &.checked {
    background-color: ${(props) => props.theme.lightPurple};
    border-color: ${(props) => props.theme.purple};
  }

  &.checked span {
    color: ${(props) => props.theme.purple};
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
    color: ${(props) => props.theme.black};
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
