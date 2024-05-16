import { SubTitle, PresentationTitle } from '../../StyledComponents/Title';
import { StyledBtnLink as Link } from '../../StyledComponents/Link';
import { AiFillCheckSquare, AiFillBulb } from "react-icons/ai";
import './HomeSections.css';

const HomePresentation = () => {
    return (
        <>
            <div className="HomePresentation">
                <div className="HomePresentation_filter">
                <SubTitle textShadow={`true`} darkmode={`true`}>
                    <strong>Comparez vos datas selon la Loi de Benford.</strong> 
                </SubTitle>
                <PresentationTitle textShadow={`true`} darkmode={`true`}>
                    Et décelez une potentielle corruption de vos données !
                </PresentationTitle>
                <Link className="Home_btn" to="/analyse" padding='30px' textShadow="true" style={{position: 'relative', marginTop: 20}}><AiFillCheckSquare style={{position: 'absolute', top: 22, left: 15}}/> Benfordiser mes datas</Link>
                </div>
            </div>
        </>
    )
}

const HomeFunny = () => {
    return (
        <>
            <div className="HomeHunny">
                <div className="HomeHunny_filter">
                <PresentationTitle textShadow={`true`} darkmode={`true`}>
                    Et si votre jeu de molky vous jouait des tours...
                    <br/> <strong>Ou pas.</strong>
                </PresentationTitle>
                <Link backgroundColor="rgba(255, 255, 255)" className="Home_btn" to="/loi-de-benford" padding='30px' textShadow="false" style={{position: 'relative', marginTop: 20, color:"#000", textAlign: 'left'}}><AiFillBulb style={{position: 'absolute', top: 35, left: 15}}/> Découvrez la loi de Benford <br/><span style={{fontWeight: 'lighter'}}>en 10 minutes avec ARTE TV</span></Link>
                </div>
            </div>
        </>
    )
}

const AnalysePresentation = ({ exemplefile }) => {
    console.log("exemplefile from prez", exemplefile)
    return (
        <>
            <div className={`AnalysePresentation ${exemplefile === "covid" ? "AnalysePresentation_covid" : ''} ${exemplefile === "population-communes" ? "AnalysePresentation_communes" : ''}`}>
                <div className="AnalysePresentation_filter">
                <PresentationTitle textShadow={`true`} darkmode={`true`}>
                    {
                        exemplefile === undefined && (
                            <>
                                Obtenez un signal fort sur la potentielle véracité de vos datas.
                                <br/> <strong>C'est parti !</strong>
                            </>
                        )
                    }
                    {
                        exemplefile === "covid" && (
                            <>
                                Exemple 1/2 : chiffres clefs sur le COVID 19 en France
                                <br/> <strong>Découvrez LoiDeBenford.fr</strong>
                            </>
                        )
                    }
                    {
                        exemplefile === "population-communes" && (
                            <>
                               Exemple 2/2 : population par commune en France
                                <br/> <strong>Découvrez LoiDeBenford.fr</strong>
                            </>
                        )
                    }
                </PresentationTitle>
                </div>
            </div>
        </>
    )
}

const InfosPresentation = () => {
    return (
        <>
            <div className="InfosPresentation">
                <div className="InfosPresentation_filter">
                <PresentationTitle textShadow={`true`} darkmode={`true`}>
                    Une collection de chiffres aléatoires...
                    <br/> <strong>Vraiment ?</strong>
                </PresentationTitle>
                </div>
            </div>
        </>
    )
}

const ModeEmploiPresentation = () => {
    return (
        <>
            <div className="ModeEmploiPresentation">
                <div className="ModeEmploiPresentation_filter">
                <PresentationTitle textShadow={`true`} darkmode={`true`}>
                    Comment benfordiser mes datas ?
                    <br/> <strong>Le mode d'emploi.</strong>
                </PresentationTitle>
                </div>
            </div>
        </>
    )
}

export {
    HomePresentation, 
    HomeFunny,
    AnalysePresentation,
    InfosPresentation,
    ModeEmploiPresentation
}