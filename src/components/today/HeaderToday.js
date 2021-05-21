import styled from "styled-components";
import dayjs from 'dayjs';
import "dayjs/locale/pt-br";

export default function HeaderToday({todayHabits}) {

    const concludedToday = todayHabits.filter(t => t.done);
   
  
    return (
        <HeaderStyles>
            <h1>{dayjs().locale("pt-br").format("dddd, "+"DD/MM/YYYY")}</h1>
            <p>{concludedToday.length >0 ? "x% dos hábitos concluídos" : "Nenhum hábito concluído ainda"}</p>
        </HeaderStyles>

    );
}

const HeaderStyles = styled.div`
    width: 100%;
    height: 100px;
    padding: 0 20px;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 70px;
    left:0;

    h1 {
        font-size: 20px;
        color: #126BA5;
        margin-bottom: 8px;;
    }

    p{
        font-size: 18px;
        color: #bababa;
    }
`;