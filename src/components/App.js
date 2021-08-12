import GlobalStyle from "../GlobalStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./LonginSignUp/Login";
import SignUp from "./LonginSignUp/SingUp";
import Habits from "./habits/Habits";
import Header from "./Header";
import Footer from "./Footer";
import Today from "./today/Today";
import { useEffect, useState } from "react";
import UserContext from "./contexts/UserContext";
import History from "./history/History";
import HabitContext from "./contexts/HabitContext";
import axios from "axios";

export default function App() {
    const alreadyLoggedIn = localStorage.getItem("lastLogin");
    const [user, setUser] = useState(alreadyLoggedIn && JSON.parse(alreadyLoggedIn));
    const [todayHabits, setTodayHabits] = useState([]);
    const [habits, setHabits] = useState([]);

    useEffect(() => getTodayHabits(), []);

    function getTodayHabits() {
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`
            }
        };

        const request = axios.get(`${process.env.REACT_APP_HOST}/habits/today`, config)
        request.then((response) => {
            setTodayHabits(response.data);
        });
        request.catch((error) => {
            console.log(error)
        });
    }

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <UserContext.Provider value={{ user, setUser }}>
                        <HabitContext.Provider value={{ todayHabits, setTodayHabits, getTodayHabits, habits, setHabits }} >
                            <Route path="/" exact>
                                <Login />
                            </Route>
                            <Route path="/signup" exact>
                                <SignUp />
                            </Route>
                            <Route path="/habits" exact>
                                <Header image={user?.image} />
                                <Habits />
                                <Footer habits={habits} />
                            </Route>
                            <Route path="/today" exact>
                                <Header image={user?.image} />
                                <Today />
                                <Footer habits={habits} />
                            </Route>
                            <Route path="/history" exact>
                                <Header image={user?.image} />
                                <History />
                                <Footer />
                            </Route>
                        </HabitContext.Provider>
                    </UserContext.Provider>
                </Switch>
            </BrowserRouter>
        </>
    );
}