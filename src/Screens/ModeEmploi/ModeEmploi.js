import HomeIntro from '../../Components/HomeIntro/HomeIntro';
import HomeUpload from '../../Components/HomeUpload/HomeUpload';
import HomeResults from '../../Components/HomeResults/HomeResults';
import { StyledBtnLink as Link } from '../../StyledComponents/Link';
import { AiFillCheckSquare, AiFillBulb } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { StyledDisplayBox as DisplayBox } from '../../StyledComponents/DisplayBox';
import { PresentationTitle, Text, SubTitle } from '../../StyledComponents/Title';
import { ModeEmploiPresentation,  } from '../../Components/HomeSections/HomeSections';
import './ModeEmploi.css';

const ModeEmploi = () => {

    const darkMode = useSelector((state) => state.darkMode);

    return (
        <>

            <ModeEmploiPresentation/>

            <DisplayBox
                className={""}
                minHeight="0px"
                margin="30px 0px 0px 20px"
                padding="0px"
                width="98%"
                darkmode={`${darkMode}`}>
                <div style={{display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: "column"}}>
                    {/* <SubTitle darkmode={`${darkMode}`} style={{paddingTop:20}}>
                    <strong>Comparez vos datas selon la Loi de Benford...</strong> 🧙‍♀️
                    </SubTitle> */}
                    <PresentationTitle darkmode={`${darkMode}`}>
                        Comprendre le fonctionnement en 10 min
                    </PresentationTitle>
                </div>
            </DisplayBox>

            <div style={{marginTop: 30, paddingBottom: 50, display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: "row"}}>
                
                <iframe
                    style={{borderRadius:15}}
                    width="50%"
                    height="600px"
                    src={`https://www.youtube.com/embed/wS1Tsj_fl5o`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />

                <DisplayBox
                    className={""}
                    minHeight="600px"
                    margin="0px 0px 0px 20px"
                    padding="0px"
                    width="47%"
                    darkmode={`${darkMode}`}>
                    <PresentationTitle darkmode={`${darkMode}`}>
                        Les points clefs
                    </PresentationTitle>
                    <Text margin="20px 0px 40px 20px" darkmode={`${darkMode}`}>
                        <span style={{padding: 5}}>> 1) La répartition de Benford est totalement équitable et normale selon une échelle multiplicative et non additive.</span>
                    </Text>
                    <Text margin="20px 0px 40px 20px" darkmode={`${darkMode}`}>
                        <span style={{padding: 5}}>> 2) Pour que la loi s'applique, il faut une série qui s'étende sur plusieurs ordres de grandeurs.</span>
                    </Text>
                    <Text margin="20px 0px 40px 20px" darkmode={`${darkMode}`}>
                        <span style={{padding: 5}}>> 3) Il n'y a pas de magie, la loi est mathématique et utilisée par les services fiscaux.</span>
                    </Text>
                    <Text margin="20px 0px 40px 20px" darkmode={`${darkMode}`}>
                        <span style={{padding: 5}}>> 4) L'applicabilité ou la non conformité de la loi avec vos données n'est pas une preuve en soi, mais plutôt un signal ou un indice à corroborer avec d'autres éléments pour matérialiser des faits.</span>
                    </Text>
                    <Text margin="20px 0px 40px 20px" darkmode={`${darkMode}`}>
                        <span style={{padding: 5}}>> 5) Informez vous sur les contours et utlisation de la loi par vous même. Point de départ possible : <br/><a target="_blank" href="https://fr.wikipedia.org/wiki/Loi_de_Benford">Loi de Benford sur Wikipedia</a>.</span>
                    </Text>
                </DisplayBox>

            </div>

            <DisplayBox
                className={"displayNone"}
                minHeight="0px"
                margin="-20px 0px 0px 20px"
                padding="0px"
                width="98%"
                darkmode={`${darkMode}`}>
                <div style={{display: 'none', justifyContent: "center", alignItems: 'center', flexDirection: "column", textAlign: "center"}}>
                    {/* <SubTitle darkmode={`${darkMode}`} style={{paddingTop:20}}>
                    <strong>Comparez vos datas selon la Loi de Benford...</strong> 🧙‍♀️
                    </SubTitle> */}
                    <PresentationTitle darkmode={`${darkMode}`}>
                       Voyez par vous-mêmes...
                       <br/><strong>2 exemples avec LoiDeBenford.fr</strong>
                    </PresentationTitle>
                </div>
            </DisplayBox>

            <div style={{display: 'none', marginTop: 30, paddingBottom: 50, display: 'flex', justifyContent: "center", alignItems: 'flex-start', flexDirection: "row"}}>
                
                <DisplayBox
                    className={"displayNone"}
                    minHeight="200px"
                    margin="0px 0px 0px 0px"
                    padding="0px"
                    width="50%"
                    darkmode={`${darkMode}`}>
                    <div style={{display: "none", flexDirection: "column", alignItems: 'center', justifyContent: "center", width: '100%', minHeight:"200px", textAlign:'center'}}>
                        <PresentationTitle darkmode={`${darkMode}`}>
                            Exemple 1/2
                            <br/>Les chiffres clefs du Covid en France
                        </PresentationTitle>
                        <img className="InfoScreen_img" src="https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" alt="covid"/>
                        <Link className="Home_btn" to="/analyse/exemple/covid" padding='30px' textShadow="true" style={{position: 'relative', marginTop: 0, marginBottom: 30}}><AiFillCheckSquare style={{position: 'absolute', top: 22, left: 15}}/> <i>Benfordisez</i> le COVID-19</Link>
                    </div>
                </DisplayBox>

                <DisplayBox
                    className={"displayNone"}
                    minHeight="200px"
                    margin="0px 0px 0px 20px"
                    padding="0px"
                    width="47%"
                    darkmode={`${darkMode}`}>
                    <div style={{display: "none", flexDirection: "column", alignItems: 'center', justifyContent: "center", width: '100%', minHeight:"200px", textAlign:'center'}}>
                        <PresentationTitle darkmode={`${darkMode}`}>
                            Exemple 2/2
                            <br/>La population des communes Françaises
                        </PresentationTitle>
                        <img className="InfoScreen_img" src="https://images.unsplash.com/photo-1511898634545-c01af8a54dd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" alt="covid"/>
                        <Link className="Home_btn" to="/analyse/exemple/population-communes" padding='30px' textShadow="true" style={{position: 'relative', marginTop: 0, marginBottom: 30}}><AiFillCheckSquare style={{position: 'absolute', top: 22, left: 15}}/> <i>Benfordisez</i> la population</Link>
                    </div>


                </DisplayBox>

            </div>

        </>
    )
}

export default ModeEmploi;

// BenFord Loap'