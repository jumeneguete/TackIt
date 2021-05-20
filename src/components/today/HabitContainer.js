import styled from "styled-components";

export default function HabitContainer() {
    return (
        <Container>
            <MyHabit>
                <p>Ler 1 capítulo de livro</p>
                <Track>
                    <p>Sequência atual: 3 dias</p>
                    <p>Seu record: 5 dias</p>
                </Track>
            </MyHabit>
            <Icon>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-square" class="svg-inline--fa fa-check-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path></svg>
            </Icon>
        </Container>

    );
}

const Container = styled.div`
    width: 95%;
    padding: 20px;
    margin: 0 auto 20px auto;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`;

const MyHabit = styled.div`
    width: 90%;
    height: 69px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    & > p {
        font-size: 20px;
        color: #666
    }
`;

const Track = styled.div`
    p {
        font-size: 15px;
        color: #666;
        margin-top: 5px;
    }
`;

const Icon = styled.div`
    svg {
        width: 69px;
        color: #666;
    }
`;

