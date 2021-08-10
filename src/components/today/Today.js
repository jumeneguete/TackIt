import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
import TodayContext from "../contexts/TodayContext";
import UserContext from "../contexts/UserContext";
import Footer from "../Footer";
import Header from "../Header";
import HabitContainer from "./HabitContainer";
import HeaderToday from "./HeaderToday";

export default function Today() {
    const {user} = useContext(UserContext);
    const { todayHabits } = useContext(TodayContext);

    return (
        <>
        <Header image={user.image} />
            <Container>
                <HeaderToday />
                <MarginTop>
                    {todayHabits === undefined ? "" :
                    todayHabits.map(t =>(
                        <HabitContainer id={t.id} name={t.name} done ={t.done} seq = {t.currentSequence} max={t.highestSequence} />      
                    ))         
                    }
                </MarginTop>
            </Container>
            <Footer todayHabits={todayHabits}/>
        </>
    );
}

const Container = styled.div`
    margin-bottom: 140px;
`;

const MarginTop = styled.div`
    margin-top: 180px;
`;