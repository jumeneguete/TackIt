import GlobalStyle from "../GlobalStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./login_and_signup/Login";
import SignUp from "./login_and_signup/SingUp";
import Habits from "./habits/Habits";
import Header from "./Header";
import Footer from "./Footer";
import Today from "./today/Today";
import { useEffect, useState } from "react";
import UserContext from "./contexts/UserContext";
import History from "./history/History";
import TodayContext from "./contexts/TodayContext";
import axios from "axios";

export default function App() {
    const alreadyLoggedIn = localStorage.getItem("lastLogin");
    const [user, setUser] = useState(alreadyLoggedIn && JSON.parse(alreadyLoggedIn));
    const [todayHabits, setTodayHabits] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`
            }
        };

        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        request.then((response) => {
            setTodayHabits(response.data);
        });
        request.catch((error) => {
            console.log(error)
        });
    }, []);

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <UserContext.Provider value={{ user, setUser }}>
                        <TodayContext.Provider value={{ todayHabits, setTodayHabits }} >
                            <Route path="/" exact>
                                <Login />
                            </Route>
                            <Route path="/signup" exact>
                                <SignUp />
                            </Route>
                            <Route path="/habits" exact>
                                <Header image={user.image} />
                                <Habits />
                                <Footer />
                            </Route>
                            <Route path="/today" exact>
                                <Header image={user.image} />
                                <Today />
                                <Footer />
                            </Route>
                            <Route path="/history" exact>
                                <Header image={user.image} />
                                <History />
                                <Footer />
                            </Route>
                        </TodayContext.Provider>
                    </UserContext.Provider>
                </Switch>
            </BrowserRouter>
        </>
    );
}