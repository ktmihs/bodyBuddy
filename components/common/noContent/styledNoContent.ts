import noContentLogo from '@assets/noContentLogo.svg';
import styled from '@emotion/styled';

export const StyledNoContent = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  .logo {
    width: 101px;
    height: 121px;
    background: url(${noContentLogo.src});
    background-repeat: no-repeat;
    margin: 0 auto 12px auto;
  }

  span {
    display: block;
    line-height: 1.5;
  }

  .title {
    font-weight: 700;
  }

  .subTitle {
    font-size: 12px;
  }
`;
