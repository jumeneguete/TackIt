import styled from "styled-components";

export default function HabitBox() {
    return (
        <Container>
            <MyHabit>Ler 1 capítulo de livro</MyHabit>
            <Days>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </Days>
        </Container>

    );
}

const Container = styled.div`
    width: 95%;
    padding: 15px 0;
    margin: 0 auto 20px auto;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`;

const MyHabit = styled.p`
    width: 90%;
    font-size: 20px;
    color: #666;
    margin-bottom: 15px;
`;

const Days = styled.div`
    width: 90%;
    margin: 10px auto;

button {
    font-size: 20px;
    color: #D5D5D5;
    background-color: #fff;
    margin: -7px 10px 15px 0;
    padding: 5px 10px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
}
`;