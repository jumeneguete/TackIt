import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input"
import LogoImg from "./LogoImg"

export default function SignUp(){
    return(
        <Main>
            <LogoImg />
            <Input type="email" placeholder="email" />
            <Input type="password" placeholder="senha" />
            <Input type="text" placeholder="nome" />
            <Input type="url" placeholder="foto" />
            <Button>Entrar</Button>
            <Link to={"/"}><p>Já tem uma conta? Faça login!</p></Link>
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