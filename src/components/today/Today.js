import styled from "styled-components";
import HeaderToday from "./HeaderToday";

export default function Today() {
    return (
        <Container>
            <HeaderToday />            
        </Container>
    );
}

const Container = styled.div`
    margin-bottom: 140px;
`;

const MarginTop = styled.div`
    margin-top: 180px;
`;