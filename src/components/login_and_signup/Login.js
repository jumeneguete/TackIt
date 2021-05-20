import axios from "axios";
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input"
import LogoImg from "./LogoImg";
import ThreeDots from "../ThreeDots";
import UserContext from "../contexts/UserContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const {setUser} = useContext(UserContext);

    function enter (e){
        e.preventDefault();

        const body = {email, password};

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);
        setLoading(true);
        request.then((response) => {
            setUser(response.data);
            history.push("/today");
        });
        request.catch(() => {
            alert("E-mail ou senha incorretos!");
            setLoading(false);
        });


    }

    return (
        <Main>
            <form onSubmit={enter}>
                <LogoImg />
                <Input type="email" disabled={loading ? true : false} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                <Input type="password" disabled={loading ? true : false} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" />
                <Button type="submit"disabled={loading ? true : false} >{loading ? <ThreeDots /> : "Entrar"}</Button>
            </form>
            <Link to={"/signup"}><p>Não tem uma conta? Cadastre-se</p></Link>
        </Main>
    );
}

const Main = styled.div`
    height:100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

        p {
            color: #55B3F7;
            text-decoration: underline;
            margin-top: 20px;
        }

        p:hover{
                color: #317bb0;
            }

        form {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
`;