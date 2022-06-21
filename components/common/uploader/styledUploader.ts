import styled from '@emotion/styled';

export const StyledImageUploader = styled.div`
  display: flex;
  justify-content: space-around;
  .uploaded {
    position: relative;
  }
  button {
    position: absolute;
    right: 0px;
    background-color: #858ff1;
    color: white;
    border-radius: 50%;
    border-style: none;
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
