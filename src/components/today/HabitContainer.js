import { Container, MyHabit, Current, Record, Icon } from "./styleToday";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import { useContext } from "react";
import HabitContext from "../contexts/HabitContext";

export default function HabitContainer({ name, done, id, seq, max }) {
    const { user } = useContext(UserContext);
    const { getTodayHabits } = useContext(HabitContext);

    function markConclude(id) {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };

        const url = done ? `${process.env.REACT_APP_HOST}/habits/${id}/uncheck`
                    : `${process.env.REACT_APP_HOST}/habits/${id}/check`;

        const request = axios.post(url, {}, config);
        request.then(() => {
            getTodayHabits();
        });
    };

    return (
        <Container>
            <MyHabit>
                <p>{name}</p>
                <div>
                    <Current done={done}>Sequência atual: {seq} dias</Current>
                    <Record record={max > 0 && seq === max}>Seu record: {max} dias</Record>
                </div>
            </MyHabit>
            <Icon colored={done}>
                <span onClick={() => markConclude(id)}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-square" className="svg-inline--fa fa-check-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path></svg></span>
            </Icon>
        </Container>

    );
}
