import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import Footer from "../Footer";
import Header from "../Header";
import HabitContainer from "./HabitContainer";
import HeaderToday from "./HeaderToday";

export default function Today() {
    const {user} = useContext(UserContext);
    const [ todayHabits, setTodayHabits ] = useState([]);

    useEffect(()=>{
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };

        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        request.then((response) => {
            setTodayHabits(response.data);
        });
        request.catch((error) => {
            console.log(error)
        });
    }, []);

    const concludedToday = todayHabits.filter(t => t.done);
    const percentage = parseInt((concludedToday.length / todayHabits.length) * 100)

    return (
        <>
        <Header image={user.image} />
            <Container>
                <HeaderToday todayHabits={todayHabits} />
                <MarginTop>
                    {todayHabits === undefined ? "" :
                    todayHabits.map(t =>(
                        <HabitContainer id={t.id} todayHabits={todayHabits} setTodayHabits= {setTodayHabits} name={t.name} done ={t.done} seq = {t.currentSequence} max={t.highestSequence} />      
                    ))         
                    }
                </MarginTop>
            </Container>
            <Footer percentage ={percentage} />
        </>
    );
}

const Container = styled.div`
    margin-bottom: 140px;
`;

const MarginTop = styled.div`
    margin-top: 180px;
`;