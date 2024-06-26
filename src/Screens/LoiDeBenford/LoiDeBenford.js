import HomeIntro from '../../Components/HomeIntro/HomeIntro';
import HomeUpload from '../../Components/HomeUpload/HomeUpload';
import HomeResults from '../../Components/HomeResults/HomeResults';
import { StyledBtnLink as Link } from '../../StyledComponents/Link';
import { AiFillCheckSquare, AiFillBulb } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { StyledDisplayBox as DisplayBox } from '../../StyledComponents/DisplayBox';
import { PresentationTitle, Text, SubTitle } from '../../StyledComponents/Title';
import { InfosPresentation,  } from '../../Components/HomeSections/HomeSections';
import './LoiDeBenford.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const InfoScreen = () => {

    const darkMode = useSelector((state) => state.darkMode);

    return (
        <>


            <InfosPresentation/>
            <Container fluid style={{}}>
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
                                    Comprendre la loi de Benford en 10 min avec une vidéo simple (réalisée par ARTE).
                                </PresentationTitle>
                            </div>
                        </DisplayBox>
                    </Col>
                    <Col md={12} lg={6} style={{paddingTop: 30}}>
                        <iframe
                            style={{borderRadius:15}}
                            width="100%"
                            height="600px"
                            src={`https://www.youtube.com/embed/wS1Tsj_fl5o`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />     
                    </Col>
                    <Col md={12} lg={6} style={{paddingTop: 30}}>
                        <DisplayBox
                            className={""}
                            minHeight="600px"
                            darkmode={`${darkMode}`}>
                            <PresentationTitle margin="0px" padding="20px 0px 0px 20px" darkmode={`${darkMode}`}>
                                Les points clefs
                            </PresentationTitle>
                            <Text margin="10px 0px 10px 20px" darkmode={`${darkMode}`}>
                                <span style={{padding: 5}}>> 1) La répartition de Benford est totalement équitable et normale selon une échelle multiplicative et non additive.</span>
                            </Text>
                            <Text margin="10px 0px 10px 20px" darkmode={`${darkMode}`}>
                                <span style={{padding: 5}}>> 2) Pour que la loi s'applique, il faut une série qui s'étende sur plusieurs ordres de grandeurs.</span>
                            </Text>
                            <Text margin="10px 0px 10px 20px" darkmode={`${darkMode}`}>
                                <span style={{padding: 5}}>> 3) Il n'y a pas de magie, la loi est mathématique et utilisée par les services fiscaux.</span>
                            </Text>
                            <Text margin="10px 0px 10px 20px" darkmode={`${darkMode}`}>
                                <span style={{padding: 5}}>> 4) L'applicabilité ou la non conformité de la loi avec vos données n'est pas une preuve en soi, mais plutôt un signal ou un indice à corroborer avec d'autres éléments pour matérialiser des faits.</span>
                            </Text>
                            <Text margin="10px 0px 10px 20px" darkmode={`${darkMode}`}>
                                <span style={{padding: 5}}>> 5) Informez vous sur les contours et utlisation de la loi par vous même. Point de départ possible : <br/><a target="_blank" href="https://fr.wikipedia.org/wiki/Loi_de_Benford">loi de Benford sur Wikipedia</a>.</span>
                            </Text>
                        </DisplayBox>
                    </Col>
                    <Col md={12} lg={12} style={{paddingTop: 30}}>
                        <DisplayBox
                            className={""}
                            minHeight="200px"
                            darkmode={`${darkMode}`}>
                            <PresentationTitle margin="0px" padding="20px 0px 0px 20px" darkmode={`${darkMode}`}>
                                Exemples de domaines d'application
                            </PresentationTitle>
                            <Text margin="10px 0px 10px 20px" darkmode={`${darkMode}`}>
                                <span style={{padding: 5}}>> 1) Domaine scientifique : études épidémiologiques localisées tel que le Covid dans certaines zones, résultats thérapeutiques, publications chiffrées, etc.</span>
                            </Text>
                            <Text margin="10px 0px 10px 20px" darkmode={`${darkMode}`}>
                                <span style={{padding: 5}}>> 2) Domaine militaire : propagande militaire "d'État voyou", nombre de blessés et morts sur un théâtre d'opération tel qu'en Ukraine, etc.</span>
                            </Text>
                            <Text margin="10px 0px 10px 20px" darkmode={`${darkMode}`}>
                                <span style={{padding: 5}}>> 3) Domaine politique : résultats d'élections ou de référendums d'annexion, etc.</span>
                            </Text>
                            <Text margin="10px 0px 10px 20px" darkmode={`${darkMode}`}>
                                <span style={{padding: 5}}>> 4) Domaine fiscal ou du blanchiment : trucage de caisse ou de recettes, falsification comptable, etc.</span>
                            </Text>
                            <Text margin="10px 0px 10px 20px" darkmode={`${darkMode}`}>
                                <span style={{padding: 5}}>> 5) Domaine économique et intelligence économique : publications de résultats d'études, données diverses concurentielle, due-diligence, etc.</span>
                            </Text>
                            <Text margin="10px 0px 10px 20px" darkmode={`${darkMode}`}>
                                <span style={{padding: 5}}>> X) Etc., domaines multiples, du moment que les conditions d'application de la loi sont vérifiées.</span>
                            </Text>
                        </DisplayBox>
                    </Col>
                </Row>
            </Container>

        
        </>
    )
}

export default InfoScreen;

// BenFord Loap'