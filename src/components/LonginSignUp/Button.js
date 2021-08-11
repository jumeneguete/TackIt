import { ButtonStyle } from "./styleLoginSignUp";

export default function Button({children, type, disabled}) {
    return (
        <ButtonStyle disabled={disabled} type={type}>{children}</ButtonStyle>
    );
}