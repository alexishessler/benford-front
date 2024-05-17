import { StyledDisplayBox as DisplayBox } from '../../StyledComponents/DisplayBox';
import { SubTitle, PresentationTitle } from '../../StyledComponents/Title';
import { useSelector } from 'react-redux';

const HomeIntro = () => {
    const darkMode = useSelector((state) => state.darkMode);
    return(
        <DisplayBox
            margin="0px"
            padding="0px"
            width="100%"
            darkmode={`${darkMode}`}>
            <SubTitle darkmode={`${darkMode}`}>
                <strong>Poussez plus loins vos investigations en comparant vos datas selon la Loi de Benford...</strong> 🧙‍♀️
            </SubTitle>
            <PresentationTitle darkmode={`${darkMode}`}>
                Et décelez une potentielle corruption de vos données ! 😏
            </PresentationTitle>
        </DisplayBox>
    )
}

export default HomeIntro;