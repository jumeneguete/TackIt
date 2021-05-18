import styled from "styled-components"

export default function Input({ type, placeholder, value }) {
    return (
        <InputStyle type={type} placeholder={placeholder} value={value}></InputStyle>
    );
}

const InputStyle = styled.input`
    width: 80%;
    margin: 10px auto;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

&::placeholder{
    font-size: 18px;
    color: #D5D5D5;
    padding-left: 10px;
}
`;