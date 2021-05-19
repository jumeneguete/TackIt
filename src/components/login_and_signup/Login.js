import styled from "styled-components";
import Button from "./Button";
import Input from "./Input"
import LogoImg from "./LogoImg"


export default function Login() {
    return (

        <Main>
            <LogoImg />
            <Input type="text" placeholder="senhemaila" />
            <Input type="password" placeholder="senha" />
            <Button>Entrar</Button>
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
`;