
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../../redux/actions/darkmode.action';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Footer.css';

import { StyledLink as Link } from '../../StyledComponents/Link';
import { 
    StyledGoGraph as GoGraph, 
    StyledLinkedin as CiLinkedin, 
    StyledLinkExternal as FaExternalLinkAlt, 
} from '../../StyledComponents/Picto';



const Menu = () => {

    const dispatch = useDispatch()
    const darkMode = useSelector((state) => state.darkMode)

    let history = useHistory();

    const handleChangeDarkMode = () => {
        dispatch(setDarkMode(!darkMode))
    }

    return(

        <>

            <Container fluid style={{textAlign: 'center', backgroundColor: darkMode ? '#000' : '#546de5'}}>
                <Row>
                    <Col xs={12} sm={12}>
                        <div style={{textAlign: 'center', padding: 40, color: darkMode ? '#546de5' : '#FFF'}}>
                            <a class="footer_link" href="#" download>Politique de confidentialité</a> | <a class="footer_link" href="#" download>Mentions légales</a>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </>
    )

}

export default Menu;