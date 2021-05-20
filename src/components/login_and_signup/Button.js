import styled from "styled-components"

export default function Button({children, type}) {
    return (
        <ButtonStyle type={type}>{children}</ButtonStyle>
    );
}

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