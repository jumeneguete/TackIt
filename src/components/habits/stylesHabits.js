import styled from "styled-components";

const Container = styled.div`
    width: 95%;
    padding: 15px 0;
    margin: 0 auto 20px auto;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    display: ${props => props.show ? "block" : "none"};

    & > form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }
`;

const InputStyle = styled.input`
    width: 90%;
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

const Days = styled.div`
    width: 90%;
    margin: 10px auto;
    display: flex;
`;

const Day = styled.div`
    width: 35px;
    text-align: center;
    font-size: 20px;
    color: #D5D5D5;
    background-color: #fff;
    margin: -7px 10px 15px 0;
    padding: 5px 10px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    &.unavailable {
        background-color: #D5D5D5;
        color: #fff;
    }

    &.disabled {
        cursor: not-allowed;
    }

`;

const Buttons = styled.div`
width: 90%;
    display: flex;
    justify-content: flex-end;
    background-color: ${props => props.bgColor ? "#55B3F7" : "#fff"};
`;

const Button = styled.button`
    color: #fff;
    font-size:20px;
    font-weight:bold;
    letter-spacing: 1px;
    padding: 8px 15px;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    color: ${props => props.bgColor ? "#fff" : "#55B3F7"};
    background-color: ${props => props.bgColor ? "#55B3F7" : "#fff"};
`;


const SingleHabit = styled.div`
    width: 95%;
    padding: 15px 0;
    margin: 0 auto 20px auto;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    display: ${props => props.show ? "none" : "block"};

    & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
`;

const MyHabit = styled.div`
    width: 90%;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    p {
        font-size: 20px;
        color: #666;
    }

    svg {
        width: 15px;
        color: #666;
    }
`;

const DaysButtons = styled.div`
    width: 90%;
    margin: 10px auto;

        button {
            font-size: 20px;
            color: #D5D5D5;
            background-color: #fff;
            margin: -7px 10px 15px 0;
            padding: 5px 10px;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
        }

        button.selected {
                background-color: #D5D5D5;
                color: #fff;
            }
`;

const HabitPage = styled.div`
    margin-bottom: 140px;
`;

const MarginTop = styled.div`
    margin-top: 180px;
`;

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

const MessageStyle = styled.span`
    font-size: 18px;
    color: #666666;
    display: ${props => props.hide ? "none" : "block" };
    
    p{
        padding: 0 20px;
    }
`;

export { Container, InputStyle, Days, Day, Buttons, Button, 
        SingleHabit, MyHabit, DaysButtons,
        HabitPage, MarginTop,
        HeaderStyles,
        MessageStyle }