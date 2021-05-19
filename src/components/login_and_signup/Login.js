import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input"
import LogoImg from "./LogoImg"


export default function Login() {
    return (

        <Main>
            <LogoImg />
            <Input type="text" placeholder="nome" />
            <Input type="password" placeholder="senha" />
            <Button>Entrar</Button>
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

`;