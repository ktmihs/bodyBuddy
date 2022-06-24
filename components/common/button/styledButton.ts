import styled from '@emotion/styled';

export const StyledGradientBackground = styled.a<{ bottom: number }>`
  display: flex;
  position: absolute;
  width: 326px;
  height: 43px;
  bottom: ${({ bottom }) => bottom}%;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(180deg, #70b4e0 0%, #858ff1 100%);
  border-radius: 5px;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  color: white;
  font-weight: 700;
  font-size: 19px;
`;

export const StyledFixedLinkButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 77px;
  position: absolute;
  bottom: 0;
  font-size: 17px;
  cursor: pointer;
  background: ${({ theme }) => theme.purple};
  color: white;
`;

export const DisabledFixedLinkButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 77px;
  position: absolute;
  bottom: 0;
  font-size: 17px;
  background: #f1eded;
`;

export const StyledSocialButton = styled.div<{ bottom: number }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: ${({ bottom }) => bottom}%;

  a {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 330px;
    height: 45px;
    cursor: pointer;
    border-radius: 12px;
    font-weight: 600;
    text-decoration: none;
    padding: 0 50px 0 40px;
  }

  .kakao {
    background-color: #fee500;
    color: ${({ theme }) => theme.black};
    margin-bottom: 10px;
  }

  .naver {
    padding-left: 52px;
    background-color: #4fa42b;
    color: white;
  }
`;

export const StyledTopButton = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  bottom: calc(77px + 5%);
  right: 5%;
  border-radius: 50%;
  border-style: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: linear-gradient(180deg, #858ff1 0%, #70b4e0 100%);
  color: #ffffff;

  #polygon {
    display: inline-block;
    width: 0px;
    height: 0px;
    border-bottom: 10px solid #ffffff;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
  }
`;

export const StyledFixedBottomButton = styled.button`
  width: 100%;
  height: 77px;
  position: absolute;
  bottom: 0;
  font-size: 17px;
  cursor: pointer;
  background: ${({ theme }) => theme.purple};
  color: white;
  border: none;
`;

export const StyledDisabledBottomButton = styled.button`
  background: #f1eded;
  border: none;
  width: 100%;
  height: 77px;
  position: absolute;
  bottom: 0;
  font-size: 17px;
  color: ${({ theme }) => theme.black};
`;
