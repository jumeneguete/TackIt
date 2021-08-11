import { InputStyle } from "./styleLoginSignUp";

export default function Input({ type, placeholder, value, onChange, disabled }) {
    return (
        <InputStyle disabled ={disabled} type={type} placeholder={placeholder} value={value} onChange={onChange}></InputStyle>
    );
}