import styled from "styled-components";

export default function AddHabitBox() {
    return (
        <Container>
            <InputStyle type="text" placeholder="nome do hábito" />
            <Days>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </Days>
            <Buttons>
                <Button>Cancelar</Button>
                <Button bgColor >Salvar </Button>
            </Buttons>
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

const InputStyle = styled.input`
    width: 90%;
    padding-left: 10px;
    margin: 10px auto;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

        &::placeholder{
            font-size: 18px;
            color: #D5D5D5;
            padding-left: 10px;
        }
        &:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
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

const Buttons = styled.div`
width: 90%;
    display: flex;
    justify-content: flex-end;
    background-color: ${props => props.bgColor ? "#55B3F7" : "#fff"};
`;

const Button = styled.div`
    color: #fff;
    font-size:20px;
    font-weight:bold;
    letter-spacing: 1px;
    padding: 8px 15px;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    color: ${props => props.bgColor? "#fff" : "#55B3F7"};
    background-color: ${props => props.bgColor ? "#55B3F7" : "#fff"};
`;