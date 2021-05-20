import styled from "styled-components";

export default function HeaderHistory() {
    return (
        <HeaderStyles>
            <h1>Histórico</h1>
        </HeaderStyles>

    );
}

const HeaderStyles = styled.div`
    width: 100%;
    height: 100px;
    padding: 0 20px;
    background-color: #f2f2f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 70px;
    left:0;

    h1 {
        font-size: 20px;
        color: #126BA5;
    }
`;