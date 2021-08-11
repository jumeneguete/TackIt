import { HeaderStyles } from "./stylesHabits";

export default function HeaderHabits({setShowAddHabitBox}) {
    return (
        <HeaderStyles>
            <h1>Meus hábitos</h1>
            <button onClick={() => setShowAddHabitBox(true)}> + </button>
        </HeaderStyles>

    );
}