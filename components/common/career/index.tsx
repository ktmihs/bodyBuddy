import Image from 'next/image';
import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { AddCareer, Career, Approval, Uploader } from './styledCareer';

export const CareerUploader = ({ careers, setCareers }: CareersProps) => {
  const [newCareer, setNewCareer] = useState<CareerProps>({
    id: '',
    image: '',
    content: '',
    isApproval: false,
  });
  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.files &&
      setNewCareer({
        ...newCareer,
        image: URL.createObjectURL(e.target.files[0]),
      });
  };

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target instanceof HTMLInputElement) {
      setNewCareer({
        ...newCareer,
        content: target.value,
      });
    }
  };

  const deleteCareer = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target;
    if (target instanceof HTMLElement) {
      const id = target.dataset.id;
      setCareers((careers: CareerProps[]) => careers.filter((career) => career.id !== id));
    }
  };

  const handleAddCareer = () => {
    if (!newCareer.image || !newCareer.content) {
      alert('인증 이미지와 경력 내용을 모두 입력해주세요');
      return;
    }
    const id = Math.random().toString(36).slice(2, 18);
    setCareers((careers: CareerProps[]) => [...careers, { ...newCareer, id: id }]);
  };

  const BLUE = '#70B4E0';
  const PURPLE = '#858FF1';

  return (
    <form>
      <fieldset>
        <legend className="srOnly">경력 정보</legend>
        {careers.length ? (
          careers.map((career) => (
            <Career key={career.id}>
              <Image src={career.image} alt="경력 인증 이미지" width={'54px'} height={'54px'} />
              <p>{career.content}</p>
              {career.isApproval ? (
                <Approval color={PURPLE}>심사완료</Approval>
              ) : (
                <Approval color={BLUE}>심사중</Approval>
              )}
              <button data-id={career.id} onClick={deleteCareer}>
                X
              </button>
            </Career>
          ))
        ) : (
          <></>
        )}
        <p>상단 경력 및 수상에 해당하는 자격 및 수상 인증을 업로드해주세요.</p>
        <Uploader className={newCareer.image ? 'uploaded' : ''}>
          <div className="careerImageWapper">
            {newCareer.image ? (
              <div>
                <Image src={newCareer.image} alt="인증 파일" width={'65px'} height={'65px'} />
                <button
                  type="button"
                  onClick={() =>
                    setNewCareer({
                      ...newCareer,
                      image: '',
                    })
                  }
                ></button>
              </div>
            ) : (
              <div>
                <label htmlFor="careerImage"></label>
                <input type="file" id="careerImage" name="file" onChange={uploadImage} />
              </div>
            )}
          </div>
          <div>
            <label htmlFor="careerContent"></label>
            <input
              type="text"
              id="careerContent"
              name="content"
              value={newCareer.content}
              onInput={handleInput}
            />
          </div>
        </Uploader>
        <AddCareer type="button" color={BLUE} onClick={handleAddCareer}>
          추가
        </AddCareer>
      </fieldset>
    </form>
  );
};
