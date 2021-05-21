import styled from "styled-components";
import { CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link, useHistory } from "react-router-dom";

export default function Footer({habits, setHideMessage, setHideBox}) {
    const history = useHistory();

    console.log(habits)

    function habitsPage(){
        if(!habits){    
            history.push("/habits")
        } else if (habits.length > 0) {
            console.log("else if")
            setHideMessage(true);
            setHideBox(false);
            history.push("/habits")
        }
    }

    const percentage = 74;
    return (
        <FooterStyle>
            <Link onClick={habitsPage}><span>Hábitos</span></Link>
            <Link to={"/today"}>
            <div label="Background">
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#55B3F7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                />
            </div>
            </Link>
            <Link to={"/history"}><span>Histórico</span></Link>
        </FooterStyle>
    );
}

const FooterStyle = styled.footer`
    width: 100%;
    height: 70px;
    background-color: #fff;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;

    span {
        font-size: 20px;
        color:  #55B3F7;
    }

    div {
        width: 90px;
        margin-bottom: 40px;
    }
`;
