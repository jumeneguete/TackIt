import { HabitPage, MarginTop } from "./stylesHabits";
import AddHabitBox from "./AddHabitBox";
import HabitBox from "./HabitBox";
import HeaderHabits from "./HeaderHabits";
import MessageHabits from "./MessageHabits";
import { useState } from "react";

export default function Habits() {
    const [hideMessage, setHideMessage] = useState(false);
    const [showAddHabitBox, setShowAddHabitBox] = useState(false);

    return (
        <>
            <HabitPage>
                <HeaderHabits setShowAddHabitBox={setShowAddHabitBox} />

                <MarginTop />
                    {showAddHabitBox && <AddHabitBox display={showAddHabitBox} setShowAddHabitBox={setShowAddHabitBox}/>}

                    {!showAddHabitBox && <HabitBox display={showAddHabitBox} setHideMessage={setHideMessage} /> }

                    <MessageHabits hide={hideMessage} />
            </HabitPage>
        </>
    );
}
