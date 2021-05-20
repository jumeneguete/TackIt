import GlobalStyle from "../GlobalStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./login_and_signup/Login";
import SignUp from "./login_and_signup/SingUp";
import Habits from "./habits/Habits";
import Today from "./today/Today";
import Header from "./Header";


export default function App() {

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Header />
                <Switch>
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
                </Switch>
            </BrowserRouter>
        </>
    );
}