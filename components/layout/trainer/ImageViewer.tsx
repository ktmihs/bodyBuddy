import styled from '@emotion/styled';
import Image from 'next/image';
import profile from '@assets/common/profile.svg';

export const ImageViewer = ({ images, handleClick, len }: ImageViewerProps) => {
  const ImageContainer = styled.div`
    display: flex;
    gap: 10px;
  `;

  const ImageWrapper = styled.div`
    width: ${len}px;
    height: ${len}px;
    border-radius: 10px;
    background-color: #d9d9d9;
    cursor: pointer;
    overflow: hidden;
  `;

  return (
    <ImageContainer>
      {images && images.length ? (
        images.map((image: string, index: number) => (
          <ImageWrapper key={index} id={String(index)} onClick={handleClick}>
            <Image src={image} alt={'강사 사진'} width={len} height={len} />
          </ImageWrapper>
        ))
      ) : (
        <Image src={profile} alt={'이미지 없음'} width={len} height={len} />
      )}
    </ImageContainer>
  );
};
