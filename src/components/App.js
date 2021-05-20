import GlobalStyle from "../GlobalStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./login_and_signup/Login";
import SignUp from "./login_and_signup/SingUp";
import Habits from "./habits/Habits";
import Today from "./today/Today";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import History from "./history/History";

export default function App() {
    const [user, setUser] = useState("");

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <UserContext.Provider value={{ user, setUser}}>
                        <Route path="/" exact>
                            <Login />
                        </Route>
                        <Route path="/signup" exact>
                            <SignUp />
                        </Route>
                        <Route path="/habits" exact>
                            <Habits />
                        </Route>
                        <Route path="/today" exact>
                            <Today />
                        </Route>
                        <Route path="/history" exact>
                            <History />
                        </Route>
                    </UserContext.Provider>
                </Switch>
            </BrowserRouter>
        </>
    );
}