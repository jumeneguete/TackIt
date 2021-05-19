import styled from "styled-components";

export default function Header (){
    return (
        <HeaderStyle>
            <span>TrackIt</span>
            <div> </div>
        </HeaderStyle>   
    );
}

const HeaderStyle = styled.header`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    span {
        font-size: 40px;
        color:  #fff;
        font-family: 'Playball', cursive; 
    }

    div{
        width: 60px;
        height: 60px;
        border-radius: 70px;
        background-image: url("https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg");
        background-size: cover;
        background-repeat: no-repeat;
    }
`;