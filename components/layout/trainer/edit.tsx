import { CareerUploader } from '@components/common/career';
import { TrainingCost } from '@components/common/cost';
import { KakaoMap } from '@components/common/map';
import { ProfileUploader } from '@components/common/profile';
import { Select } from '@components/common/select';
import { ImageUploader } from '@components/common/uploader';
import { healthEvents, healthPurpose } from '@data';
import styled from '@emotion/styled';
import Image from 'next/image';
import profile from '@assets/common/profile.svg';

export const Edit = ({ trainerState, trainerSetState }: EditProps) => {
  const { field, purpose, images, gymUrl, careers, price } = trainerState;
  const { setField, setPurpose, setImagesUrl, setGymUrl, setCareers, setPrice } = trainerSetState;

  const TrainerEdit = styled.main`
    margin: 0px 20px 10px 20px;

    h2 {
      font-weight: 800;
      font-size: 14px;
      line-height: 30px;
      color: #858ff1;
    }

    h3 {
      font-size: 11px;
      line-height: 30px;
      color: #646464;
    }

    p {
      font-size: 10px;
      line-height: 20px;
      color: #70b4e0;
      margin-bottom: 10px;
    }
  `;

  const ImageWrapper = styled.div`
    margin: 0 auto;
    width: 150px;
    border-radius: 50%;
    overflow: hidden;
  `;

  const SelectBoxes = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: left;
    gap: 10px;
  `;

  return (
    <TrainerEdit>
      <section>
        <h2 className="srOnly">썸네일</h2>
        <ImageWrapper>
          <Image
            src={images && images.length && images[0] ? images[0] : profile}
            alt="강사"
            width={150}
            height={150}
          />
        </ImageWrapper>
      </section>
      <section>
        <h2>상세 정보</h2>
        <section>
          <h3>종목 및 분야</h3>
          <SelectBoxes>
            <Select
              currentSelectedData={field}
              selectData={healthEvents}
              selectWidth={140}
              onSetCurrentSelected={setField}
            />
            <Select
              currentSelectedData={purpose}
              selectData={healthPurpose}
              selectWidth={140}
              onSetCurrentSelected={setPurpose}
            />
          </SelectBoxes>
        </section>
        <section>
          <h3>프로필 사진</h3>
          <p>트레이너 님을 대표할 수 있는 사진을 업로드 해주세요 :)</p>
          <p>첫 번째 이미지가 프로필로 표시됩니다.</p>
          <ImageUploader url={images || []} setImageUrl={setImagesUrl} />
        </section>
      </section>
      <section>
        <h2>트레이닝장 정보</h2>
        <section>
          <h3>트레이닝장 사진</h3>
          {/* 짐용 새로운 컴포넌트 만들기 */}
          {/* <ProfileUploader profile={profileUrl} setProfile={setProfileUrl} /> */}
        </section>
        <section>
          <h3>트레이닝장 위치</h3>
          <div>
            <div>검색엔진</div>
            <div>트레이닝장 위치</div>
            {/* <KakaoMap /> */}
          </div>
        </section>
      </section>
      <section>
        <h2>1:1 트레이닝 비용</h2>
        <TrainingCost cost={price} setCost={setPrice} />
      </section>
      <section>
        <h2>경력 정보</h2>
        <CareerUploader careers={careers} setCareers={setCareers} />
      </section>
    </TrainerEdit>
  );
};
