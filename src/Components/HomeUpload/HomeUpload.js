import { StyledDisplayBox as DisplayBox } from '../../StyledComponents/DisplayBox';
import { PresentationTitle, Text } from '../../StyledComponents/Title';
import MainForm from '../MainForm/MainForm';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomeUpload = () => {
    const darkMode = useSelector((state) => state.darkMode);
    // const allowedExtensions = ["xlsx", "xls", "csv"];
    const allowedExtensions = ["csv"];
    return(
        <Col md={12} lg={4} style={{paddingTop: 10}}>
            <DisplayBox
                minHeight="200px"
                darkmode={`${darkMode}`}>
                <PresentationTitle padding="20px 0px 0px 0px" id="scrollToUploaderDivBottom" darkmode={`${darkMode}`}>
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
        </Col>
    )
}

export default HomeUpload;