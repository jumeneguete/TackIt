import styled from "styled-components";

export default function HeaderHabits() {
    return (
        <HeaderStyles>
            <h1>Meus hábitos</h1>
            <button> + </button>
        </HeaderStyles>

    );
}

const HeaderStyles = styled.div`
    height: 100px;
    margin-top: 70px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 20px;
        color: #126BA5;
    }

    button {
        font-size: 25px;
        font-weight: bold;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 3px 12px;
        background-color: #55B3F7;
    }
`;