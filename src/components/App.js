import GlobalStyle from "../GlobalStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./login_and_signup/Login";


export default function App() {

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Switch>

                    <Route path="/" exact>
                        <Login />
                    </Route>

                </Switch>
            </BrowserRouter>

        </>
    );
}