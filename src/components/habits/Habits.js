import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";
import AddHabitBox from "./AddHabitBox";
import HabitBox from "./HabitBox";
import HeaderHabits from "./HeaderHabits";
import MessageHabits from "./MessageHabits";
import UserContext from "../contexts/UserContext";
import { useContext, useState } from "react";

export default function Habits() {
    const {user} = useContext(UserContext);
    const [hideAdd, setHideAdd] = useState(true);
    const [hideBox, setHideBox] = useState(true);
    const [hideMessage, setHideMessage] = useState(false);

    return (
        <>
         <Header image={user.image}/>
            <Container>
                <HeaderHabits setHideMessage={setHideMessage} setHideAdd={setHideAdd} setHideBox={setHideBox} />

                <MarginTop>
                    <AddHabitBox hide={hideAdd} setHideAdd={setHideAdd} setHideBox={setHideBox} />
                </MarginTop>

                <MarginTop>
                    <HabitBox hide={hideBox}/>
                </MarginTop>

                <MarginTop>
                    <MessageHabits hide={hideMessage} />
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