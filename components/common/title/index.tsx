import Image from 'next/image';
import { StyledTitle } from './styledTitle';

export const TitleBar = ({ left, right, centerTitle }: TitleBarProps) => {
  return (
    <StyledTitle>
      {left ? (
        <a className="left" href={left?.link} onClick={left?.handler}>
          <Image
            src={left?.src as string}
            alt={left?.alt}
            width={left?.width ?? 15}
            height={left?.height ?? 15}
          ></Image>
        </a>
      ) : (
        <a className="left"></a>
      )}
      <span>{centerTitle ? centerTitle : ''}</span>
      {right ? (
        <a className="right" href={right?.link} onClick={right?.handler}>
          <Image
            src={right?.src as string}
            alt={right?.alt}
            width={right?.width ?? 15}
            height={right?.height ?? 15}
          ></Image>
        </a>
      ) : (
        <a className="right"></a>
      )}
    </StyledTitle>
  );
};
