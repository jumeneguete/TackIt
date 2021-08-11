import { useContext, useEffect } from "react";
import { TodayPage, MarginTop } from "./styleToday";
import HabitContext from "../contexts/HabitContext";
import UserContext from "../contexts/UserContext";
import Footer from "../Footer";
import Header from "../Header";
import HabitContainer from "./HabitContainer";
import HeaderToday from "./HeaderToday";

export default function Today() {
    const {user} = useContext(UserContext);
    const { todayHabits, getTodayHabits, habits } = useContext(HabitContext);

    useEffect(() => getTodayHabits(), [habits]);

    return (
        <>
        <Header image={user.image} />
            <TodayPage>
                <HeaderToday />
                <MarginTop>
                    {todayHabits === undefined ? "" :
                    todayHabits.map(t =>(
                        <HabitContainer key={t.id} id={t.id} name={t.name} done ={t.done} seq = {t.currentSequence} max={t.highestSequence} />      
                    ))         
                    }
                </MarginTop>
            </TodayPage>
            <Footer todayHabits={todayHabits}/>
        </>
    );
}
