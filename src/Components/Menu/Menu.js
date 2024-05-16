import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../../redux/actions/darkmode.action';
import "react-toggle/style.css"
import Toggle from 'react-toggle'
import './Menu.css';
import { Title, SubTitle, Text } from '../../StyledComponents/Title';
import { StyledLink as Link } from '../../StyledComponents/Link';
import { 
    StyledGoGraph as GoGraph, 
    StyledLinkedin as CiLinkedin, 
    StyledLinkExternal as FaExternalLinkAlt, 
} from '../../StyledComponents/Picto';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu = () => {

    const dispatch = useDispatch()
    const darkMode = useSelector((state) => state.darkMode)

    let history = useHistory();

    const handleChangeDarkMode = () => {
        dispatch(setDarkMode(!darkMode))
    }

    const handleClickToHome = () => {
        history.push("/");
    }

    return(

        <>

            <Navbar expand="lg" className={`menu menu_${darkMode ? "dark" : 'light'}`}>
                <Container fluid>
                    <Navbar.Brand href="#">
                        <div class="menu_presentation__displaylogo">
                            <GoGraph onClick={handleClickToHome} darkmode={`${darkMode}`} className="menu_presentation__logo"/>  
                            <Title onClick={handleClickToHome} darkmode={`${darkMode}`} textShadow={`true`} margin={"0px 0px 0px 0px"} style={{cursor: "pointer"}}>LoiDeBenford<span style={{fontWeight: 'lighter', color: '#FFFFFF'}}>.fr</span></Title>
                            <span className="menu_credit" style={{marginLeft: 10, marginRight: 40, fontSize: '1rem', color: darkMode ? '#FFF' : '#000'}}>(Version Beta 0.1 by <a class="linkedInLink" href="https://www.linkedin.com/in/alexishessler" target="_blank">{<FaExternalLinkAlt darkmode={`${darkMode}`}/>} /\\eKs</a>)</span>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '400px' }}
                        navbarScroll
                    >
                        <Link to="/" darkmode={`${darkMode}`}>Accueil</Link>
                        <Link to="/loi-de-benford" darkmode={`${darkMode}`}>Loi de Benford</Link>
                        <Link to="/mode-emploi" darkmode={`${darkMode}`}>Mode d'emploi</Link>  
                        

           
                    </Nav>
                    <div className="menu_presentation__rightsubmenu">
                            <div className="menu_presentation__rightsubmenu_links">
                                <Link to="/analyse" actionBtn={"true"} darkmode={`${darkMode}`}>Benfordiser mes datas</Link>
                            </div>
                            <div>
                                <Toggle 
                                    className={`menu_toggle_${darkMode ? 'dark' : 'dark'}`}
                                    defaultChecked={darkMode}
                                    onChange={handleChangeDarkMode} 
                                />
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>

                </Navbar>
    

    </>
    )

}

export default Menu;