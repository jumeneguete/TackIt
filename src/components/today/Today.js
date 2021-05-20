import styled from "styled-components";
import HabitContainer from "./HabitContainer";
import HeaderToday from "./HeaderToday";

export default function Today() {
    return (
        <Container>
            <HeaderToday /> 
            <MarginTop>
                <HabitContainer />
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