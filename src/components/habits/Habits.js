import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";
import AddHabitBox from "./AddHabitBox";
import HabitBox from "./HabitBox";
import HeaderHabits from "./HeaderHabits";
import MessageHabits from "./MessageHabits";

export default function Habits() {
    return (
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
    );
}

const Container = styled.div`
    margin-bottom: 140px;
`;

const MarginTop = styled.div`
    margin-top: 180px;
`;