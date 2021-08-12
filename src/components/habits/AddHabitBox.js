import { useState, useContext } from "react";
import { Container, InputStyle, Days, Day, Buttons, Button } from "./stylesHabits";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import ThreeDotsHabits from "../ThreeDotsHabits";

export default function AddHabitBox({ display, setShowAddHabitBox }) {
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

        const request = axios.post(`${process.env.REACT_APP_HOST}/habits`, body, config);
        setLoading(true);
        request.then(() => {
            setShowAddHabitBox(false);
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
        setShowAddHabitBox(false);
    }

    return (
        <Container show={display}>
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

