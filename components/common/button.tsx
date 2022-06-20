import styled from '@emotion/styled';
import Link from 'next/link';

interface LinkButtonProps {
  link: string;
  buttonTitle: string;
}

interface IsValidLinkButtonProps extends LinkButtonProps {
  isValid: boolean;
}

const StyledGradientBackground = styled.a`
  display: flex;
  position: absolute;
  width: 326px;
  height: 43px;
  bottom: 30px;
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

const StyledFixedLinkButton = styled.a`
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

const DisabledFixedLinkButton = styled.div`
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

export const GradientButton = ({ link, buttonTitle }: LinkButtonProps) => {
  return (
    <Link href={link}>
      <StyledGradientBackground>
        <span>{buttonTitle}</span>
      </StyledGradientBackground>
    </Link>
  );
};

export const FixedBottomLinkButton = ({ isValid, link, buttonTitle }: IsValidLinkButtonProps) => {
  return (
    <>
      {isValid ? (
        <Link href={link}>
          <StyledFixedLinkButton>{buttonTitle}</StyledFixedLinkButton>
        </Link>
      ) : (
        <DisabledFixedLinkButton>{buttonTitle}</DisabledFixedLinkButton>
      )}
    </>
  );
};
