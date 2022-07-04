import styled from '@emotion/styled';

interface OptionType {
  city: string;
  district: string;
  gender: string;
  field: string[];
  purpose: string[];
}

interface OptionProps {
  options: OptionType;
}

const Option = ({ options }: OptionProps) => {
  const OptionColors = ['#A3D8FA', '#D8CAFF', '#D2EDFF', '#FED6A6', '#FAE9AD'];
  const OPT_LEN = OptionColors.length;

  const OPTIONS: string[] = [];

  const { city, district, gender, field, purpose } = options;

  if (city && city !== '시/도') {
    if (district && district === '군/구') OPTIONS.push(`${city} 전지역`);
    else if (district) OPTIONS.push(`${city} ${district}`);
  }

  gender === 'man' ? OPTIONS.push('남성') : gender === 'woman' && OPTIONS.push('여성');
  field?.length && OPTIONS.push(...field);
  purpose?.length && OPTIONS.push(...purpose);

  const OptionList = styled.ul`
    position: relative;
    width: 80%;
    margin-top: 20px;
    height: fit-content;
    background-color: #fff;
  `;

  const OptionItem = styled.li`
    white-space: nowrap;
    display: inline-block;
    margin-right: 6px;
    margin-bottom: 6px;
    background-color: ${({ optColor }: { optColor: number }) => OptionColors[optColor % OPT_LEN]};
    border-radius: 5px;
    padding: 4px;
    cursor: default;
  `;

  const EmptyList = styled.p`
    position: relative;
    font-size: 11px;
    top: -5px;
    left: 5px;
  `;

  return (
    <OptionList>
      {OPTIONS.length ? (
        OPTIONS.map((option: string, idx: number) => (
          <OptionItem optColor={idx} key={idx}>
            {option}
          </OptionItem>
        ))
      ) : (
        <EmptyList>상세 옵션을 선택해보세요 :)</EmptyList>
      )}
    </OptionList>
  );
};

export default Option;
