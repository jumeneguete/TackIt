import { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import ThreeDotsHabits from "../ThreeDotsHabits";

export default function AddHabitBox({ hide, setHideAdd, setHideBox }) {
    const {user} = useContext(UserContext);
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
        const same = days.filter(n => n === day);

        if (same.length > 0) {
            const array = days.filter(d => d !== day);
            daysOfTheWeek.forEach(d => d.day == day ? d.available = true : "") 
            setDays(array);
            return;
        }

        const newArray = [...days, day];
        daysOfTheWeek.forEach(d => d.day === day ? d.available = false : "") 
        setDays(newArray);
    }

    function addHabit (){        
        const body = {name, days};
        const config = {
            headers: {
              Authorization: `Bearer ${user.token}`
            }
          };

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config);
        setLoading(true);
        console.log(loading)
        request.then(() => {
            console.log("oi")
            setHideAdd(true);
            setHideBox(false);
            setLoading(false);
        });
        request.catch(() => {
            alert("Algo deu errado :(!");
            setLoading(false);
        });

        setName("");
        daysOfTheWeek.forEach(d => d.available= true);
    }

    return (
        <Container hide={hide}>
            <div>
                <InputStyle type="text" disabled={loading ? true : false}  placeholder="nome do hábito" value={name} onChange={(e) => setName(e.target.value)} />
                <Days>
                    {daysOfTheWeek.map(d => (
                        <Day key={d.day} onClick={() => selectDay(d.day)} className={`${!d.available ? "unavailable" : ""} ${loading ? "disabled" : ""}`}>{d.name}</Day>
                    ))}
                </Days>
                <Buttons>
                    <Button disabled={loading ? true : false}  type="button">Cancelar</Button>
                    <Button disabled={loading ? true : false}  onClick ={addHabit} bgColor >{loading ? <ThreeDotsHabits /> : "Salvar"} </Button>
                </Buttons>
            </div>
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

    & > div {
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

const Button = styled.div`
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