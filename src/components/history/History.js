import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";
import HeaderHistory from "./HeaderHistory";
import MessageHistory from "./MessageHistory";

export default function History() {
    const {user} = useContext(UserContext);

    return (
        <>
            <Header image={user.image} />
            <Container>
                <HeaderHistory />
                <MarginTop>
                    <MessageHistory />
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