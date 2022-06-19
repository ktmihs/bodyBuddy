import styled from "@emotion/styled";

const Option = ({options}:any) => {
  const OptionColors = [
    '#A3D8FA', '#D8CAFF', '#D2EDFF', '#FED6A6', '#FAE9AD'
  ]
  const OPT_LEN = OptionColors.length;
  
  const OptionList = styled.ul`
    width: 70vw;
    margin-top: 20px;
    height: fit-content;
    background-color: #fff;
  `;

  const OptionItem = styled.li`
    white-space: nowrap;
    display: inline-block;
    margin-right: 6px;
    margin-bottom: 6px;
    background-color: ${({optColor}:{optColor:number}) => OptionColors[optColor % OPT_LEN]};
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