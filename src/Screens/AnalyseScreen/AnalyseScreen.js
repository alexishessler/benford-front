import { useParams } from "react-router-dom";
import HomeIntro from '../../Components/HomeIntro/HomeIntro';
import HomeUpload from '../../Components/HomeUpload/HomeUpload';
import HomeResults from '../../Components/HomeResults/HomeResults';
import { AnalysePresentation } from '../../Components/HomeSections/HomeSections';
import { useSelector } from 'react-redux';
import { StyledDisplayBox as DisplayBox } from '../../StyledComponents/DisplayBox';
import { PresentationTitle, Text, SubTitle } from '../../StyledComponents/Title';
import './AnalyseScreen.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { 
    StyledGoGraph as GoGraph, 
    StyledLinkedin as CiLinkedin, 
    StyledLinkExternal as FaExternalLinkAlt, 
} from '../../StyledComponents/Picto';

const AnalyseScreen = () => {
    const { exemplefile } = useParams();
    console.log("exemplefile", exemplefile)
    const darkMode = useSelector((state) => state.darkMode);
    return (
        <>
            <AnalysePresentation exemplefile={exemplefile}/>

            <Container fluid style={{}} className="AnalyseScreen">
                <Row>
                    <Col xs={12} sm={12}>
                        <DisplayBox
                            className={""}
                            minHeight="0px"
                            margin="30px 0px 0px 0px"
                            darkmode={`${darkMode}`}>
                            <div style={{display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: "column"}}>
                                {/* <SubTitle darkmode={`${darkMode}`} style={{paddingTop:20}}>
                                <strong>Poussez plus loin vos investigations en comparant vos datas selon la loi de Benford...</strong> 🧙‍♀️
                                </SubTitle> */}
                                <PresentationTitle darkmode={`${darkMode}`}>
                                    Benfordiser mes datas en ligne
                                </PresentationTitle>
                            </div>
                        </DisplayBox>    
                    </Col>
                    <Col md={12} lg={12} style={{paddingTop: 30}}>
                        <DisplayBox
                           
                            className={""}
                            minHeight="300px"
                            darkmode={`${darkMode}`}>
                            <PresentationTitle margin="0px" padding="20px 0px 0px 20px" darkmode={`${darkMode}`}>
                                Règles d'utilisation de l'outil en ligne
                            </PresentationTitle>
                            <Text margin="20px 0px 40px 20px" darkmode={`${darkMode}`}>
                                <span style={{padding: 5}}>Cet outil est opensource et gratuit. Libre à vous d'utiliser cette version web, ou de vous réapproprier le code source (liens en bas de page) localement. En cas d'utilisation de cette version web, les fichiers envoyés sont immédiatement supprimés après traitement des algorithmes (politique de confidentialité en bas de page). En revanche, des traces de traitement de votre fichier (tels que des logs avec des textes et des chiffres figurant sur votre fichier) peuvent exister.</span>
                            </Text>
                            <Text margin="20px 0px 40px 20px" darkmode={`${darkMode}`}>
                                <span style={{padding: 5}}>C'est pourquoi, si vos données sont protégées ou sensibles, et que vous souhaitez une prestation de service contractualisée pour une analyse professionnelle, contenant une clause de confidentialité et/ou de non concurrence, merci de <a class="linkedInLink" href="https://www.linkedin.com/in/alexishessler" target="_blank">{<FaExternalLinkAlt darkmode={`${darkMode}`}/>} me contacter directement</a> préalablement à toute utilisation de l'outil.</span>
                            </Text>
                        </DisplayBox>
                    </Col>
          
              
                        <HomeUpload/>
                        <HomeResults/> 
                        
                        
              
                   
                </Row>
            </Container>



           
        </>
    )
}

export default AnalyseScreen;

