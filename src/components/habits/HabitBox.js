import axios from "axios";
import { useEffect, useContext } from "react";
import { SingleHabit, MyHabit, DaysButtons } from "./stylesHabits";
import UserContext from "../contexts/UserContext";
import HabitContext from "../contexts/HabitContext";

export default function HabitBox({ display, setHideMessage }) {
    const { user } = useContext(UserContext);
    const { habits, setHabits } = useContext(HabitContext);
    const config = { headers: { Authorization: `Bearer ${user.token}` } };

    useEffect(() => loadHabits(), []);

    function loadHabits() {
        const request = axios.get(`${process.env.REACT_APP_HOST}/habits`, config);
        request.then((response) => {
            setHabits(response.data);
            response.data.length === 0 ? setHideMessage(false) : setHideMessage(true);
        });
        request.catch((error) => {
            console.log(error)
        });
    }

    function deleteHabit(id, name) {
        const confirmation = window.confirm(`Você realmente deseja apagar "${name}"?`);

        if (confirmation === true) {
            const promise = axios.delete(`${process.env.REACT_APP_HOST}/habits/${id}`, config);
            promise.then(() => {
                loadHabits();
            });
            promise.catch((error) => {
                console.log(error);
            })
        }
    }

    return (
        <>
            {habits === null ? "" :

                habits.map(h => (
                    <SingleHabit key={h.id} show={display}>
                        <div>
                            <MyHabit>
                                <p key={h.id}>{h.name}</p>
                                <span onClick={() => deleteHabit(h.id, h.name)}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" className="svg-inline--fa fa-trash fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg></span>
                            </MyHabit>
                            <DaysButtons>
                                <button className={`${h.days.includes(7) ? "selected" : ""}`}>D</button>
                                <button className={`${h.days.includes(1) ? "selected" : ""}`}>S</button>
                                <button className={`${h.days.includes(2) ? "selected" : ""}`}>T</button>
                                <button className={`${h.days.includes(3) ? "selected" : ""}`}>Q</button>
                                <button className={`${h.days.includes(4) ? "selected" : ""}`}>Q</button>
                                <button className={`${h.days.includes(5) ? "selected" : ""}`}>S</button>
                                <button className={`${h.days.includes(6) ? "selected" : ""}`}>S</button>
                            </DaysButtons>
                        </div>
                    </SingleHabit>
                ))}
        </>

    );
}
