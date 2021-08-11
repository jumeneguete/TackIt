import { HeaderStyles } from './styleToday';
import dayjs from 'dayjs';
import "dayjs/locale/pt-br";
import { useContext } from "react";
import HabitContext from "../contexts/HabitContext";

export default function HeaderToday() {   
    const {todayHabits} =useContext(HabitContext);
    const concludedToday = todayHabits.filter(t => t.done);
    const percentage = parseInt((concludedToday.length / todayHabits.length) * 100);

    return (
        <HeaderStyles colored={concludedToday.length >0}>
            <h1>{dayjs().locale("pt-br").format("dddd, "+"DD/MM/YYYY")}</h1>
            <p>{concludedToday.length >0 ? `${percentage}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}</p>
        </HeaderStyles>

    );
}