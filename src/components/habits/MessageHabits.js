import styled from "styled-components";

export default function MessageHabits({hide}) {
    return (

        <Span hide={hide}><p>Você não tem nenhum hábito cadastrado ainda.
        Adicione um hábito para começar a trackear!</p></Span>


    );
}

const Span = styled.span`
    font-size: 18px;
    color: #666666;
    display: ${props => props.hide ? "none" : "block" };
    
    p{
        padding: 0 20px;
    }
`;