import styled from "@emotion/styled";

const Option = ({options}:any) => {
  const OptionColors = [
    '#A3D8FA', '#D8CAFF', '#D2EDFF', '#FED6A6', '#FAE9AD'
  ]
  
  const OptionList = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    gap: 6px;
  `;

  const OptionItem = styled.li`
    background-color: ${({optColor}:{optColor:number}) => OptionColors[optColor]};
    border-radius: 5px;
    padding: 4px;
  `;

  return (
    <OptionList>
      {
        options.map((optionItem: string, idx: number) => 
          <OptionItem optColor={idx} key={idx}>{optionItem}</OptionItem>
        )
      }
    </OptionList>
  )
}

export default Option;