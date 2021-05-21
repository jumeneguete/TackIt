import { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import ThreeDotsHabits from "../ThreeDotsHabits";

export default function AddHabitBox({ hide, setHideAdd, setHideBox, habits, setHabits }) {
    const { user } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [days, setDays] = useState([]);
    const [daysOfTheWeek, setDaysOfTheWeek] = useState([
        { day: 7, name: "D", available: true },
        { day: 1, name: "S", available: true },
        { day: 2, name: "T", available: true },
        { day: 3, name: "Q", available: true },
        { day: 4, name: "Q", available: true },
        { day: 5, name: "S", available: true },
        { day: 6, name: "S", available: true }
    ])
    function selectDay(day) {
        if (days.length > 0) {
            const same = days.filter(n => n === day);

            if (same.length > 0) {
                const array = days.filter(d => d !== day);
                daysOfTheWeek.forEach(d => d.day == day ? d.available = true : "")
                setDays(array);
                return;
            }
        }

        const newArray = [...days, day];
        daysOfTheWeek.forEach(d => d.day === day ? d.available = false : "")
        setDays(newArray);
    }

    function addHabit(e) {
        e.preventDefault();

        if(days.length === 0){
            alert("Complete os campos corretamente!");
            return;
        }

        const body = { name, days };
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config);
        setLoading(true);
        request.then((response) => {
            setHabits([...habits, response.data]);
            setHideAdd(true);
            setHideBox(false);
            setLoading(false);
        });
        request.catch(() => {
            alert("Algo deu errado :(!");
            setLoading(false);
        });

        setName("");
        daysOfTheWeek.forEach(d => d.available = true);
        setDays([]);
    }

    function cancel() {
        setHideAdd(true);
        setHideBox(false);
    }

    return (
        <Container hide={hide}>
            <form onSubmit={addHabit}>
                <InputStyle type="text" disabled={loading ? true : false} placeholder="nome do hábito" value={name} onChange={(e) => setName(e.target.value)} />
                <Days>
                    {daysOfTheWeek.map(d => (
                        <Day key={d.day} onClick={() => selectDay(d.day)} className={`${!d.available ? "unavailable" : ""} ${loading ? "disabled" : ""}`}>{d.name}</Day>
                    ))}
                </Days>
                <Buttons>
                    <Button disabled={loading ? true : false} onClick={cancel} type="button">Cancelar</Button>
                    <Button disabled={loading ? true : false} type="submit" bgColor >{loading ? <ThreeDotsHabits /> : "Salvar"} </Button>
                </Buttons>
            </form>
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
    display: ${props => props.hide ? "none" : "block"};

    & > form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }
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
    display: flex;
`;

const Day = styled.div`
    width: 35px;
    text-align: center;
    font-size: 20px;
    color: #D5D5D5;
    background-color: #fff;
    margin: -7px 10px 15px 0;
    padding: 5px 10px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    &.unavailable {
        background-color: #D5D5D5;
        color: #fff;
    }

    &.disabled {
        cursor: not-allowed;
    }

`;

const Buttons = styled.div`
width: 90%;
    display: flex;
    justify-content: flex-end;
    background-color: ${props => props.bgColor ? "#55B3F7" : "#fff"};
`;

const Button = styled.button`
    color: #fff;
    font-size:20px;
    font-weight:bold;
    letter-spacing: 1px;
    padding: 8px 15px;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    color: ${props => props.bgColor ? "#fff" : "#55B3F7"};
    background-color: ${props => props.bgColor ? "#55B3F7" : "#fff"};
`;