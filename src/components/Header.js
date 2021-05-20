import styled from "styled-components";

export default function Header ({image}){
    return (
        <HeaderStyle url={image}>
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
        background-image: ${props => props.url ? `url(${props.url})` : ""};
        background-size: cover;
        background-repeat: no-repeat;
    }
`;