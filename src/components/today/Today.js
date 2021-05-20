import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";
import HabitContainer from "./HabitContainer";
import HeaderToday from "./HeaderToday";

export default function Today() {
    return (
        <>
        <Header />
            <Container>
                <HeaderToday />
                <MarginTop>
                    <HabitContainer />
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