import { StyledDisplayBox as DisplayBox } from '../../StyledComponents/DisplayBox';
import { PresentationTitle, Text } from '../../StyledComponents/Title';
import MainForm from '../MainForm/MainForm';
import { useSelector } from 'react-redux';

import { 
    StyledGoGraph as GoGraph, 
    StyledLinkedin as CiLinkedin, 
    StyledLinkExternal as FaExternalLinkAlt, 
} from '../../StyledComponents/Picto';

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
            <Text margin="0px 0px 20px 20px" darkmode={`${darkMode}`}>
                <span>Cet outil est opensource et gratuit. Libre à vous d'utiliser cette version web, ou de vous réapproprier le code source (liens en bas de page) localement. En cas d'utilisation de cette version web, les fichiers envoyés sont immédiatement supprimés après traitement des algorithmes (politique de confidentialité en bas de page). En revanche, des traces de traitement de votre fichier (tels que des logs avec des textes et des chiffres figurant sur votre fichier) peuvent exister. C'est pourquoi, si vos données sont protégées ou sensibles, et que vous souhaitez une prestation de service contractualisée avec une clause de confidentialité et/ou de non concurrence, merci de <a class="linkedInLink" href="https://www.linkedin.com/in/alexishessler" target="_blank">{<FaExternalLinkAlt darkmode={`${darkMode}`}/>} me contacter directement</a> préalablement à toute utilisation de l'outil.</span>
            </Text>
            <MainForm allowedExtensions={allowedExtensions}/>
        </DisplayBox>
    )
}

export default HomeUpload;