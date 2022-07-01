import { ChangeEvent, useState } from 'react';
import { StyledImageUploader } from './styledUploader';

export const ImageUploader = () => {
  const [url, setImageUrl] = useState<string[]>(['', '', '']);

  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    const tempUrl = URL.createObjectURL(e.target.files[0]);
    const selectedImage = e.currentTarget.dataset?.id;
    setImageUrl(
      url.map((source, index) => (selectedImage && index === +selectedImage ? tempUrl : source))
    );
  };

  const removeImage = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const selectedImage = e.currentTarget.dataset?.id;
    setImageUrl(
      url.map((source, index) => (selectedImage && index === +selectedImage ? '' : source))
    );
  };

  return (
    <StyledImageUploader>
      {url.map((source, index) => (
        <div key={index} className={url[index] ? 'uploaded' : ''}>
          {url[index] ? (
            <>
              <img src={source} alt="첨부한 사진" width={'100px'} height={'100px'} />
              <button
                data-id={index}
                onClick={(e) => {
                  removeImage(e);
                }}
              ></button>
            </>
          ) : (
            <>
              <label htmlFor={'file-input' + index}></label>
              <input
                type="file"
                id={'file-input' + index}
                name="file"
                data-id={index}
                onChange={(e) => {
                  uploadImage(e);
                }}
              />
            </>
          )}
        </div>
      ))}
    </StyledImageUploader>
  );
};
