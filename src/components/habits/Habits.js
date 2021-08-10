import styled from "styled-components";
import AddHabitBox from "./AddHabitBox";
import HabitBox from "./HabitBox";
import HeaderHabits from "./HeaderHabits";
import MessageHabits from "./MessageHabits";
import { useState } from "react";

export default function Habits() {
    const [habits, setHabits] = useState([]);
    const [hideMessage, setHideMessage] = useState(false);
    const [showAddHabitBox, setShowAddHabitBox] = useState(false)


    return (
        <>
            <Container>
                <HeaderHabits setShowAddHabitBox={setShowAddHabitBox} />

                <MarginTop />
                    {showAddHabitBox && <AddHabitBox display={showAddHabitBox} setShowAddHabitBox={setShowAddHabitBox}/>}

                    {!showAddHabitBox && <HabitBox habits={habits} display={showAddHabitBox} setHabits={setHabits} setHideMessage={setHideMessage} /> }

                    <MessageHabits hide={hideMessage} />
            </Container>
        </>
    );
}

const Container = styled.div`
    margin-bottom: 140px;
`;

const MarginTop = styled.div`
    margin-top: 180px;
`;