import { FixedBottomLinkButton } from '@components/common/button';
import { KakaoMap } from '@components/common/map';
import { ProfileUploader } from '@components/common/profile';
import { Select } from '@components/common/select';
import { ImageUploader } from '@components/common/uploader';
import { healthEvents, healthPurpose } from '@data';
import styled from '@emotion/styled';
import { useState } from 'react';

export const Edit = ({ field, purpose, images, gymImage }: EditProps) => {
  const [newField, setNewFieled] = useState(field);
  const [newPurpose, setNewPurpose] = useState(purpose);
  const [profile, setProfile] = useState<string>(images[0] || '');

  const id = 1;

  const TrainerEdit = styled.main`
    margin: 10px 20px;

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
        <ProfileUploader profile={profile} setProfile={setProfile} />
      </section>
      <section>
        <h2>상세 정보</h2>
        <section>
          <h3>종목 및 분야</h3>
          <SelectBoxes>
            <Select
              currentSelectedData={newField}
              selectData={healthEvents}
              selectWidth={140}
              onSetCurrentSelected={setNewFieled}
            />
            <Select
              currentSelectedData={newPurpose}
              selectData={healthPurpose}
              selectWidth={140}
              onSetCurrentSelected={setNewPurpose}
            />
          </SelectBoxes>
        </section>
        <section>
          <h3>프로필 사진</h3>
          <p>트레이너 님을 대표할 수 있는 사진을 업로드 해주세요 :)</p>
          <ImageUploader />
        </section>
      </section>
      <section>
        <h2>트레이닝장 정보</h2>
        <section>
          <h3>트레이닝장 사진</h3>
          <ImageUploader />
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
        <h2>경력 정보</h2>
      </section>
      <FixedBottomLinkButton isValid link={`/trainer/${id}`} buttonTitle={'변경 사항 저장'} />
    </TrainerEdit>
  );
};
