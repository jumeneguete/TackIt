import {MessageStyle} from "./stylesHabits";

export default function MessageHabits({hide}) {
    return (

        <MessageStyle hide={hide}><p>Você não tem nenhum hábito cadastrado ainda.
        Adicione um hábito para começar a trackear!</p></MessageStyle>
    );
}
