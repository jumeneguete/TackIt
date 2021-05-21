import axios from "axios";
import { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";

export default function HabitBox({ hide, habits, setHabits, setHideMessage }) {
    const { user } = useContext(UserContext);


    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };

        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
        request.then((response) => {
            setHabits(response.data);
        });
        request.catch((error) => {
            console.log(error)
        });
    }, [])

    function deleteHabit (id, name){
        const confirmation = window.confirm(`Você realmente deseja apagar "${name}"?`);
        
        if (confirmation === true){
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            };

            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
            promise.then(()=> {
                
                const config = {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                };
        
                const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
                request.then((response) => {
                    if (habits.length === 1){
                        setHideMessage(false)
                    }
                    setHabits(response.data);
                    
                });
                request.catch((error) => {
                    console.log(error)
                });

            })

            promise.catch((error)=> {
                console.log(error)
            })         
        }
    }

    return (
        <>
            {habits === null ? "" :

                habits.map(h => (
                    <Container hide={hide}>
                        <div>
                            <MyHabit>
                                <p key={h.id}>{h.name}</p>
                                <span onClick={()=> deleteHabit(h.id, h.name)}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg></span>
                            </MyHabit>
                            <Days>
                                <button className={`${h.days.includes(7) ? "selected" : ""}`}>D</button>
                                <button className={`${h.days.includes(1) ? "selected" : ""}`}>S</button>
                                <button className={`${h.days.includes(2) ? "selected" : ""}`}>T</button>
                                <button className={`${h.days.includes(3) ? "selected" : ""}`}>Q</button>
                                <button className={`${h.days.includes(4) ? "selected" : ""}`}>Q</button>
                                <button className={`${h.days.includes(5) ? "selected" : ""}`}>S</button>
                                <button className={`${h.days.includes(6) ? "selected" : ""}`}>S</button>
                            </Days>
                        </div>
                    </Container>
                ))}
        </>

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

        button.selected {
                background-color: #D5D5D5;
                color: #fff;
            }
`;