import styled from "styled-components";

export default function HeaderHabits({setHideAdd, setHideMessage, setHideBox}) {
    return (
        <HeaderStyles>
            <h1>Meus hábitos</h1>
            <button onClick={() => {
                setHideMessage(true); 
                setHideAdd(false);
                setHideBox(true);
                }}> + </button>
        </HeaderStyles>

    );
}

const HeaderStyles = styled.div`
    width: 100%;
    height: 100px;
    padding: 0 20px;
    background-color: #f2f2f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 70px;
    left:0;

    h1 {
        font-size: 20px;
        color: #126BA5;
    }

    button {
        font-size: 25px;
        font-weight: bold;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 3px 12px;
        background-color: #55B3F7;
    }
`;