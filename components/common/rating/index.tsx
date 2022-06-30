import styled from '@emotion/styled';
import Image from 'next/image';

interface RatingGroupProps {
  isEditingMode: boolean;
  width: number;
  height: number;
}
const RatingGroupContainer = styled.div`
  display: inline-block;

  input {
    display: none;
  }
  label {
    background: url('/assets/common/star.svg') no-repeat;
    background-size: 30px;
    background-position: center;
    width: 40px;
    height: 40px;
    display: inline-block;
    cursor: pointer;
  }
`;

const RatingGroup = ({ isEditingMode, width, height }: RatingGroupProps) => {
  return (
    <RatingGroupContainer className="rating-container">
      {isEditingMode ? (
        <>
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
      ) : (
        <>
          <Image src="/assets/common/star.svg" alt="1" width={width} height={height} />
          <Image src="/assets/common/star.svg" alt="2" width={width} height={height} />
          <Image src="/assets/common/star.svg" alt="3" width={width} height={height} />
          <Image src="/assets/common/star.svg" alt="3" width={width} height={height} />
          <Image src="/assets/common/star-blank.svg" alt="5" width={width} height={height} />
        </>
      )}
    </RatingGroupContainer>
  );
};

export default RatingGroup;
