import styled from "styled-components"

export default function Input({ type, placeholder, value, onChange }) {
    return (
        <InputStyle type={type} placeholder={placeholder} value={value} onChange={onChange}></InputStyle>
    );
}

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