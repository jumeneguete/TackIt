import styled from "styled-components";

const ButtonStyle = styled.button`
    width: 80%;
    height: 45px;
    color: #fff;
    font-size:20px;
    font-weight:bold;
    letter-spacing: 1px;
    margin: 10px auto;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    background-color: #55B3F7;
    
    &:hover{
        background-color: #317bb0;
    }
`;

const InputStyle = styled.input`
    width: 80%;
    padding-left: 10px;
    margin: 10px auto;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

        &::placeholder{
            font-size: 18px;
            color: #D5D5D5;
            padding-left: 10px;
        }
        &:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
`;

const LoginPageStyle = styled.div`
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

const Logotipo = styled.img`
    width: 180px;
    margin-bottom: 30px;
`;

const SignUpPageStyle = styled.div`
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

export { ButtonStyle,
        InputStyle,
        LoginPageStyle,
        Logotipo,
        SignUpPageStyle }
