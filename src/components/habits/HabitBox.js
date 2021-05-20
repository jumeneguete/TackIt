import styled from "styled-components";

export default function HabitBox() {
    return (
        <Container>
            <MyHabit>
                <p>Ler 1 capítulo de livro</p>
                <span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg></span>
            </MyHabit>
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

const MyHabit = styled.div`
    width: 90%;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    p {
        font-size: 20px;
        color: #666;
    }

    svg {
        width: 15px;
        color: #666;
    }
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