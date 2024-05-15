import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../../redux/actions/darkmode.action';
import "react-toggle/style.css"
import Toggle from 'react-toggle'
import './Menu.css';
import { Title, SubTitle, Text } from '../../StyledComponents/Title';
import { StyledLink as Link } from '../../StyledComponents/Link';
import { GoGraph } from "react-icons/go";

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
        <div className={`menu menu_${darkMode ? "dark" : 'light'}`}>
            <div className="menu_presentation">
                    <GoGraph onClick={handleClickToHome} className="menu_presentation__logo"/>
                <div>
                    <Title onClick={handleClickToHome} textShadow={`true`} margin={"0px 0px 0px 0px"} style={{cursor: "pointer"}}>LoiDeBenford<span style={{fontWeight: 'lighter', color: '#FFFFFF'}}>.fr</span></Title>
                    <Text darkmode="true" margin={"0px 0px 0px 0px"}>by <a href="https://www.linkedin.com/in/alexishessler" target="_blank">/\\eKs</a></Text>
                </div>
            </div>
            <div className="menu_presentation__rightsubmenu">
                <div className="menu_presentation__rightsubmenu_links">
                    <Link to="/analyse" darkmode={`${darkMode}`}>Analyse</Link>
                    <Link to="/explications" darkmode={`${darkMode}`}>Explications</Link>  
                </div>
                <div>
                    <Toggle 
                        className={`menu_toggle_${darkMode ? 'dark' : 'dark'}`}
                        defaultChecked={darkMode}
                        onChange={handleChangeDarkMode} 
                    />
                </div>
            </div>

        </div>
    )

}

export default Menu;