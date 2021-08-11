import styled from "styled-components";

const Container = styled.div`
    width: 95%;
    padding: 20px;
    margin: 0 auto 20px auto;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`;

const MyHabit = styled.div`
    width: 90%;
    height: 69px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    & > p {
        font-size: 20px;
        color: #666
    }
`;

const Current = styled.p`
        font-size: 15px;
        color: ${props => props.done ? "#008000 " : "#666"};
        margin-top: 5px;
`;

const Record = styled.p`
        font-size: 15px;
        color: ${props => props.record ? "#008000 " : "#666"};
        margin-top: 5px;
`;

const Icon = styled.div`
    svg {
        width: 69px;
        color: ${props => props.colored ? "#008000 " : "#666"}
    }
`;

const HeaderStyles = styled.div`
    width: 100%;
    height: 100px;
    padding: 0 20px;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 70px;
    left:0;

    h1 {
        font-size: 20px;
        color: #126BA5;
        margin-bottom: 8px;;
    }

    p{
        font-size: 18px;
        color: ${props => props.colored ? "#008000" : "#bababa"};
 
    }
`;

const TodayPage = styled.div`
    margin-bottom: 140px;
`;

const MarginTop = styled.div`
    margin-top: 180px;
`;

export { Container, MyHabit, Current, Record, Icon,
        HeaderStyles,
        TodayPage, MarginTop }