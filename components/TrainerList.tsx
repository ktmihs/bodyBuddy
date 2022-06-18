import styled from "@emotion/styled";

const TrainerList = ({trainerList}:any) => {
  const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: space-between;
    background: #FFFFFF;
    padding: 10px 10px;

    li{
      width: 172px;
      height: 246px;

      margin-bottom: 8px;
      background: #F3F2F2;
      border-radius: 10px;

      div{
        background-color: transparent;
      }
    }
  `;  

  return (
    <List>
      {trainerList.map((trainer: any) => 
        <li key={trainer.id}>
          <div>
            t1
          </div>
        </li>
      )}
    </List>
  )
}

export default TrainerList;