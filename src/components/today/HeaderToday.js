import styled from "styled-components";
import dayjs from 'dayjs';
import "dayjs/locale/pt-br";
import { useContext } from "react";
import TodayContext from "../contexts/TodayContext";

export default function HeaderToday() {   
    const {todayHabits} =useContext(TodayContext)
    const concludedToday = todayHabits.filter(t => t.done);
    const percentage = parseInt((concludedToday.length / todayHabits.length) * 100)
    

    return (
        <HeaderStyles color={concludedToday.length >0}>
            <h1>{dayjs().locale("pt-br").format("dddd, "+"DD/MM/YYYY")}</h1>
            <p>{concludedToday.length >0 ? `${percentage}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}</p>
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
        color: ${props => props.color ? "#008000" : "#bababa"};
 
    }
`;