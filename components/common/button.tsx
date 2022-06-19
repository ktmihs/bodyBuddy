import styled from '@emotion/styled';
import Link from 'next/link';

const StyledGradientBackground = styled.a`
  display: flex;
  position: absolute;
  width: 375px;
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

type GradientButtonProps = {
  link: string;
  buttonTitle: string;
};

export function GradientButton({ link, buttonTitle }: GradientButtonProps) {
  return (
    <Link href={link}>
      <StyledGradientBackground>
        <span>{buttonTitle}</span>
      </StyledGradientBackground>
    </Link>
  );
}

// export function FixedBottomLinkButton({ isValid, link, buttonTitle }) {
//   return (
//     <Link href={link}>
//       <a>{buttonTitle}</a>
//     </Link>
//   );
// }
