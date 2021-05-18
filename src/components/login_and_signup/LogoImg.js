import logotipo from "../../img/logotipo.png";
import styled from "styled-components"

export default function LogoImg () {

    return(
        <Logotipo src={logotipo} alt="Logotipo TrackIt"/>
    );
}

const Logotipo = styled.img`
    width: 180px;
    margin-bottom: 30px;
`;