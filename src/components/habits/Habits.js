import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";
import AddHabitBox from "./AddHabitBox";
import HabitBox from "./HabitBox";
import HeaderHabits from "./HeaderHabits";
import MessageHabits from "./MessageHabits";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

export default function Habits() {
    const {user} = useContext(UserContext);

    return (
        <>
         <Header image={user.image}/>
            <Container>
                <HeaderHabits />

                <MarginTop>
                    <AddHabitBox />
                </MarginTop>

                <MarginTop>
                    <HabitBox />
                </MarginTop>

                <MarginTop>
                    <MessageHabits />
                </MarginTop>
            </Container>
            <Footer />
        </>
    );
}

const Container = styled.div`
    margin-bottom: 140px;
`;

const MarginTop = styled.div`
    margin-top: 180px;
`;