import styled from '@emotion/styled';

export const Career = styled.section`
  position: relative;
  display: flex;
  padding: 13px 0;
  border-bottom: 1px solid #cdcdcd;

  p {
    padding: 0 20px;
    width: 180px;
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    color: #858ff1;
  }

  button {
    position: absolute;
    top: 13px;
    right: 5px;
    font-weight: 700;
    height: 18px;
  }
`;

export const Approval = styled.div`
  position: absolute;
  right: 25px;
  width: fit-content;
  height: 18px;
  padding: 4px;
  background-color: ${(props) => props.color};
  font-weight: 700;
  font-size: 10px;
  line-height: 18px;
  color: #fff;
  border-radius: 5px;
`;

export const Uploader = styled.section`
  display: flex;
  justify-content: space-between;

  .careerImageWapper {
    box-sizing: border-box;
    position: relative;
    width: 90px;
    height: 65px;
    border: 1px solid #b9b9b9;
    text-align: center;

    .uploaded {
      position: relative;
    }

    button {
      position: absolute;
      right: -10px;
      top: -10px;
      width: 25px;
      height: 25px;
      background: url('/assets/common/button-delete.svg') no-repeat;
      cursor: pointer;
    }

    label {
      display: inline-block;
      cursor: pointer;
      margin-top: 8px;
      background: url('/assets/common/camera.svg') no-repeat;
      background-size: 46px;
      width: 46px;
      height: 46px;
    }

    input {
      display: none;
    }
  }

  input[type='text'] {
    box-sizing: border-box;
    display: inline-block;
    width: 250px;
    height: 65px;

    background: #ffffff;
    border: 1px solid #dadada;
    border-radius: 10px;
  }
`;

export const AddCareer = styled.button`
  float: right;
  box-sizing: content-box;
  width: 38px;
  height: 21px;
  padding: 4px;
  background-color: ${(props) => props.color};
  font-weight: 700;
  font-size: 10px;
  color: #fff;
  border-radius: 5px;
  margin: 7px 0 15px 0;
`;

export const UploaderMessage = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 10px;
  line-height: 36px;
  margin-top: 12px;
  color: #818181 !important;
`;
