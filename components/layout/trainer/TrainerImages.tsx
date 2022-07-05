import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from './Button';

export const TrainerImages = ({ images, onClickSetModal, initialslider }: TrainerModalProps) => {
  const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 390px;
    height: 100vh;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
  `;

  const ImageModal = styled.article`
    box-sizing: border-box;
    background-color: #fff;
    width: 350px;
    height: 400px;
    position: absolute;
    z-index: 10;
    top: 200px;
    left: 20px;
    padding: 10px;
  `;

  const CloseButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    background-color: white;
    border-radius: 50%;
    z-index: 20;
  `;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: initialslider,
    nextArrow: <Button role="next" onClick={() => {}} />,
    prevArrow: <Button role="prev" onClick={() => {}} />,
  };

  return (
    <Background>
      <ImageModal>
        <CloseButton onClick={() => onClickSetModal((state: boolean) => !state)}>X</CloseButton>
        <section>
          <Slider {...settings}>
            {images.map((image: string, index: number) => (
              <div key={index}>
                <Image src={image} title={'강사 사진'} alt={'강사 사진'} width={350} height={350} />
              </div>
            ))}
          </Slider>
        </section>
      </ImageModal>
    </Background>
  );
};
