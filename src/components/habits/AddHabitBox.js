import { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import UserContext from "../contexts/UserContext";

export default function AddHabitBox({ hide }) {
    const {user} = useContext(UserContext);
    const [name, setName] = useState("");
    const [days, setDays] = useState([]);
    const daysOfTheWeek = [
        { day: 1, name: "D", available: true },
        { day: 2, name: "S", available: true },
        { day: 3, name: "T", available: true },
        { day: 4, name: "Q", available: true },
        { day: 5, name: "Q", available: true },
        { day: 6, name: "S", available: true },
        { day: 7, name: "S", available: true }
    ]

    function selectDay(day) {
        const same = days.filter(n => n === day);

        if (same.length > 0) {
            const array = days.filter(d => d !== day);
            setDays(array);
            return;
        }

        const newArray = [...days, day];
        //daysOfTheWeek.forEach(dia => dia.available === day ? dia.available = false : dia.available = false) 
        //Esse filter não funciona por nada!!
        setDays(newArray);
    }

    console.log(user)
    //essa função não está enviando.. nem o botão faz nada, mesmo com o type="submit"
    //esse user não está retornando nada :(
    function addHabit (){
        const body = {name, days};
        const config = {
            headers: {
              Authorization: `Bearer ${user.token}`
            }
          };

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config);

        request.then((response) => console.log(response));
        request.catch((error) => console.log(error));
    }

    console.log(days)
    console.log(daysOfTheWeek)

    

    return (
        <Container hide={hide}>
            <form onSubmit={addHabit}>
                <InputStyle type="text" placeholder="nome do hábito" value={name} onChange={(e) => setName(e.target.value)} />
                <Days>
                    {/* Essa classe não funciona, mesmo eu adicionando ela direto, sem lógica por tras */}
                    {daysOfTheWeek.map(d => (
                        <Day key={d.day} onClick={() => selectDay(d.day)} className={`${!d.available ? "unavailable" : ""} `}>{d.name}</Day>
                    ))}
                </Days>
                <Buttons>
                    <Button>Cancelar</Button>
                    <Button type="submit" bgColor >Salvar </Button>
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

    form {

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

    .unvailable {
        background-color: red;
        color: #fff;
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