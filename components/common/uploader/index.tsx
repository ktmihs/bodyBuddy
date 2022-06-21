import Image from 'next/image';
import { StyledImageUploader } from './styledUploader';

export const ImageUploader = () => {
  return (
    <StyledImageUploader>
      <div className="uploaded">
        {/* 임시 이미지 */}
        <Image
          src="/assets/community/blank.svg"
          alt="첨부한 사진"
          width={'100px'}
          height={'100px'}
        />
        <button>X</button>
      </div>

      <div>
        <label htmlFor="file-input2"></label>
        <input type="file" id="file-input2" name="file" />
      </div>

      <div>
        <label htmlFor="file-input3"></label>
        <input type="file" id="file-input3" name="file" />
      </div>
    </StyledImageUploader>
  );
};
