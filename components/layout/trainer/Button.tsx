import styled from '@emotion/styled';

interface ButtonProps {
  onClick: () => void;
  role: string;
}

const Button = ({ onClick, role }: ButtonProps) => {
  const StyledButton = styled.button`
    position: absolute;
    top: 50%;
    right: ${(props) => props.role === 'next' && '0px'};
    transform: translateY(-50%);
    width: 20px;
    cursor: pointer;
    z-index: 10;
  `;

  return (
    <StyledButton onClick={onClick} role={role} aria-label={role === 'prev' ? '이전' : '다음'}>
      {role === 'prev' ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
          <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
          <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
        </svg>
      )}
    </StyledButton>
  );
};

export default Button;
