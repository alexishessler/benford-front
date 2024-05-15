import { StyledDisplayBox as DisplayBox } from '../../StyledComponents/DisplayBox';
import { PresentationTitle, Text } from '../../StyledComponents/Title';
import MainForm from '../MainForm/MainForm';
import { useSelector } from 'react-redux';

const HomeUpload = () => {
    const darkMode = useSelector((state) => state.darkMode);
    // const allowedExtensions = ["xlsx", "xls", "csv"];
    const allowedExtensions = ["csv"];
    return(
        <DisplayBox
            minHeight="200px"
            margin="0px 20px 0px 0px"
            padding="0px 0px 30px 0px"
            width="30%"
            darkmode={`${darkMode}`}>
            <PresentationTitle id="scrollToUploaderDivBottom" darkmode={`${darkMode}`}>
                Uploadez votre fichier à analyser
            </PresentationTitle>
            <Text margin="0px 0px 0px 20px" darkmode={`${darkMode}`}>
                <span>Types de fichiers autorisés (autres à venir) :</span>
            </Text>
            <Text darkmode={`${darkMode}`}>
                {
                    allowedExtensions.map(ext => <span key={ext} className="AnalyseScreen_filetype">.{ext}</span>)
                }
            </Text>
            <MainForm allowedExtensions={allowedExtensions}/>
        </DisplayBox>
    )
}

export default HomeUpload;