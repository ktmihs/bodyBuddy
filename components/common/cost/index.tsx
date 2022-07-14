import { CostInput, CostWrapper } from './styledCost';

export const TrainingCost = ({ cost, setCost }: TrainingProps) => {
  return (
    <CostWrapper>
      <span>1회 당</span>
      <span>원</span>
      <CostInput>
        <label htmlFor="trainingCost" className="srOnly">
          1:1 트레이닝 비용
        </label>
        <input id="trainingCost" value={cost} onInput={(e) => setCost(e.currentTarget.value)} />
      </CostInput>
    </CostWrapper>
  );
};
