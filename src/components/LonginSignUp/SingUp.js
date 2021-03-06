import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { SignUpPageStyle } from "./styleLoginSignUp";
import ThreeDots from "../ThreeDots";
import Button from "./Button";
import Input from "./Input"
import LogoImg from "./LogoImg"

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function register(e) {
        e.preventDefault();

        const body = { name, email, password, image }

        
        const request = axios.post(`${process.env.REACT_APP_HOST}/auth/sign-up`, body);
        setLoading(true);
        request.then(() => {history.push("/")});
        request.catch(() => {
            alert("Preencha corretamente os campos!");
            setLoading(false);
        });

    }

    return (
        <SignUpPageStyle>
            <LogoImg />
            <form onSubmit={register}>
                <Input type="email" disabled={loading ? true : false} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                <Input type="password" disabled={loading ? true : false} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" />
                <Input type="text" disabled={loading ? true : false} value={name} onChange={(e) => setName(e.target.value)} placeholder="nome" />
                <Input type="url" disabled={loading ? true : false} value={image} onChange={(e) => setImage(e.target.value)} placeholder="foto" />
                <Button type="submit" disabled={loading ? true : false} >{loading ? <ThreeDots /> : "Cadastrar"}</Button>
            </form>
            <Link to={"/"}><p>Já tem uma conta? Faça login!</p></Link>
        </SignUpPageStyle>
    );
}
