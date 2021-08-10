import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import { useContext } from "react";
import TodayContext from "../contexts/TodayContext";


export default function HabitContainer({ name, done, id, seq, max }) {
    const { user } = useContext(UserContext);
    const { todayHabits, setTodayHabits } = useContext(TodayContext);
    

    function markConclude(id) {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };

        if (!done) {

            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config);
            request.then(() => {
                const check = todayHabits.map(t => {
                    if (t.id === id) {
                        t.done = true;
                    }
                    return t;
                })
                setTodayHabits(check);
            });
            request.catch((error) => {
                console.log(error)
            });

        } else if (done) {

            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config);
            request.then(() => {
                const uncheck = todayHabits.map(t => {
                    if (t.id === id) {
                        t.done = false
                    }
                    return t;
                })
                setTodayHabits(uncheck);
            });
            request.catch((error) => {
                console.log(error)
            });
        }

    }

    return (
        <Container>
            <MyHabit>
                <p>{name}</p>
                <div>
                    <Current done={done}>Sequência atual: {seq} dias</Current>
                    <Record record={max > 0 && seq === max}>Seu record: {max} dias</Record>
                </div>
            </MyHabit>
            <Icon color={done}>
                <span onClick={() => markConclude(id)}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-square" class="svg-inline--fa fa-check-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path></svg></span>
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

const Current = styled.p`
        font-size: 15px;
        color: ${props => props.done ? "#008000 " : "#666"};
        margin-top: 5px;
`;

const Record = styled.p`
        font-size: 15px;
        color: ${props => props.record ? "#008000 " : "#666"};
        margin-top: 5px;
`;

const Icon = styled.div`
    svg {
        width: 69px;
        color: ${props => props.color ? "#008000 " : "#666"}
    }
`;

