import styled from '@emotion/styled';

export const StyledImageUploader = styled.div`
  margin: 0 auto;
  width: 125px;

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
    background: center url('/assets/common/profile.svg') no-repeat;
    width: 125px;
    height: 125px;
    border-radius: 50%;
  }

  input[type='file'] {
    display: none;
  }
`;
