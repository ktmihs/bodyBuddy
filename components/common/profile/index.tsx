import Image from 'next/image';
import { ChangeEvent } from 'react';
import { StyledImageUploader } from './styledProfile';

export const ProfileUploader = ({ profile, setProfile }: ProfileProps) => {
  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener('load', ({ target }) => setProfile(target?.result));
  };

  return (
    <StyledImageUploader>
      <div className={profile ? 'uploaded' : ''}>
        {profile ? (
          <>
            <Image src={profile} alt="프로필" width={'125px'} height={'125px'} />
            <button onClick={() => setProfile('')}></button>
          </>
        ) : (
          <>
            <label htmlFor="profile"></label>
            <input type="file" id="profile" name="file" onChange={uploadImage} />
          </>
        )}
      </div>
    </StyledImageUploader>
  );
};
