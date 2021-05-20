import styled from "styled-components";

export default function HeaderToday() {
    return (
        <HeaderStyles>
            <h1>Segunda, 17/05</h1>
            <p>Nenhum hábito concluído ainda</p>
        </HeaderStyles>

    );
}

const HeaderStyles = styled.div`
    width: 100%;
    height: 100px;
    padding: 0 20px;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 70px;
    left:0;

    h1 {
        font-size: 20px;
        color: #126BA5;
        margin-bottom: 8px;;
    }

    p{
        font-size: 18px;
        color: #bababa;
    }
`;