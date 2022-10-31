import styled from '@emotion/styled';

export const StyledImageUploader = styled.div`
  display: flex;
  justify-content: space-around;
  .uploaded {
    position: relative;
  }
  button {
    position: absolute;
    right: -10px;
    top: -10px;
    width: 25px;
    height: 25px;
    border-style: none;
    background: url('/assets/common/button-delete.svg') no-repeat;
    background-position: center;
    cursor: pointer;
  }
  label {
    display: inline-block;
    background: url('/assets/common/camera.svg') no-repeat;
    background-position: center;
    border: 1px solid darkgray;
    width: 100px;
    height: 100px;
  }
  input[type='file'] {
    display: none;
  }
`;
