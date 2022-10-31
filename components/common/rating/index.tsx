import styled from '@emotion/styled';
import Image from 'next/image';
import { useMemo } from 'react';

const RatingGroupContainer = styled.div`
  &.edit {
    display: flex;
    flex-direction: row-reverse;
    width: 50%;
    margin: 0 auto;
  }

  input {
    display: none;
  }
  label {
    background: url('/assets/common/star-blank.svg') no-repeat;
    background-size: 30px;
    background-position: center;
    width: 40px;
    height: 40px;
    display: inline-block;
    cursor: pointer;
  }
  & :checked ~ label {
    background: url('/assets/common/star.svg') no-repeat;
    background-size: 30px;
    background-position: center;
  }
`;

const RatingGroup = ({ isEditingMode, onChangeRating, star, width, height }: RatingGroupProps) => {
  const StarFill = useMemo(
    () =>
      [1, 2, 3, 4, 5].map((v, index) => (
        <Image
          key={index}
          src={star < v ? '/assets/common/star-blank.svg' : '/assets/common/star.svg'}
          alt={v + ''}
          width={width}
          height={height}
        />
      )),
    [star]
  );

  const RatingGroup = useMemo(
    () => (
      <>
        {' '}
        <input type="radio" id="5-stars" name="rating" value="5" />
        <label htmlFor="5-stars"></label>
        <input type="radio" id="4-stars" name="rating" value="4" />
        <label htmlFor="4-stars"></label>
        <input type="radio" id="3-stars" name="rating" value="3" />
        <label htmlFor="3-stars"></label>
        <input type="radio" id="2-stars" name="rating" value="2" />
        <label htmlFor="2-stars"></label>
        <input type="radio" id="1-stars" name="rating" value="1" />
        <label htmlFor="1-stars"></label>
      </>
    ),
    []
  );

  return (
    <RatingGroupContainer
      className={isEditingMode ? 'edit' : 'none'}
      onChange={(e) => onChangeRating(e)}
    >
      {isEditingMode ? <>{RatingGroup}</> : <>{StarFill}</>}
    </RatingGroupContainer>
  );
};

export default RatingGroup;
