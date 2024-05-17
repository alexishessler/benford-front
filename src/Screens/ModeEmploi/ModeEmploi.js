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

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ModeEmploi = () => {

    const darkMode = useSelector((state) => state.darkMode);


    const stepsData = [
        {
            title: "Choisissez des données à analyser",
            texts: [
                {
                    type: "txt",
                    content: "Vous n'avez pas de données à analyser, ou vous souhaitez faire un simple essai pour commencer ?",
                },
                {
                    type: "link",
                    url: "https://www.data.gouv.fr/fr/",
                    content: "[Exemple] En guise d'exemple, ou pour tester sur des jeux de données, cliquez ici pour explorer la base gouvernementale de données publiques : data.gouv.fr.",
                },
                
 
            ],
            img: "",
        },
        {
            title: "Veiller à disposer d'un fichier au format .csv",
            texts: [
                {
                    type: "txt",
                    content: "Tout d'abord, il vous faut disposer d'un fichier au format .csv qui comprend vos datas. Si votre fichier dispose d'une autre extension (.json, .xls, .xlsx, etc.), il vous faut le convertir en .csv au préalable.",
                },
                {
                    type: "link",
                    url: "/table-indicateurs-open-data-dep-2023-06-30-17h59.csv",
                    content: "[Exemple] Toujours pour l'exemple, cliquez ici pour télécharger le fichier de synthèse des chiffres de l'épidemie de Covid 19, provenant de data.gouv.fr : table-indicateurs-open-data-dep-2023-06-30-17h59.csv.",
                },
            ],
            img: "",
        },
        {
            title: "Vérifier la structure du fichier à analyser",
            texts: [
                {
                    type: "txt",
                    content: "Attention, tous les fichiers ne sont pas bons à analyser en l'état. Non seulement il doit contenir suffisamment de données exploitables qui respectent une réapartition aléatoire. Mais aussi, il vous faut vérifier sa structure." ,
                },
                {
                    type: "txt",
                    content: "Dans ce fichier .csv, la première cellule (la première ligne) doit contenir les intitulés de 1 ou plusieurs colonnes. Si plusieurs colonnes, les intitulés doivent être séparés par un même séparateur : en général il s'agit d'une virgule (,) ou d'un point virgule (;). Toutes les lignes suivantes contiennent les données, avec aussi le même séparateur le cas échéant. Au moins une colonne doit exister." ,
                },
                {
                    type: "txt",
                    content: "[Exemple] Voici un exemple de structure attendue (ici l'exemple reprend le fichier de l'étape n°2) : " ,
                },
            ],
            img: "/structure-exemple.png",
        },
        {
            title: "Uplader votre fichier à benfordiser",
            texts: [
                {
                    type: "txt",
                    content: "Pour finir, rendez-vous sur la page \"Benfordiser mes datas\". Uploadez votre fichier depuis votre ordinateur. Dans les champs qui apparaissent, indiquez le séparateur (par exemple , ou ;), et enfin l'intitulé de la colonne à analyser en premier.",
                },
                {
                    type: "txt",
                    content: "[Exemple] Pour le fichier d'exemple, vous pourriez indiquer \"rea\" sans les guillemets, pour analyser la colonne intitulée rea, qui recense le nombre d'admission de patients Covid 19 en réanimation, par date. Vous pourrez ensuite visualiser les résultats de conformité avec la loi de Benford, et explorer les autres colonnes le cas échéant.",
                },
            ],
            img: "",
        },
    ]

    const steps = stepsData.map((step, i) => {
        return (
            <Col xs={12} sm={6} md={4} lg={3} style={{paddingTop: 30}}>
                <DisplayBox
                    key={i+1}
                    className={""}
                    minHeight="200px"
                    darkmode={`${darkMode}`}>
                    <PresentationTitle margin="0px" padding="20px 20px 0px 20px" darkmode={`${darkMode}`}>
                        Étape n°{i+1} : {step.title}
                    </PresentationTitle>
                    <hr/>
    
                    {
                        step.texts.map(el => {
                            if(el.type === "txt"){
                                return (
                                    <Text margin="0px 20px" darkmode={`${darkMode}`}>
                                        <span>{el.content}</span>
                                    </Text>
                                )
                            }
                            if(el.type === "link"){
                                return (
                                    <Text margin="0px 20px" darkmode={`${darkMode}`}>
                                        <a target="_blank" href={`${el.url}`}>{el.content}</a>
                                    </Text>
                                )
                            }
                        })
                    }
                    {
                        step.img && (<img style={{width: '100%'}} src={`${step.img}`} alt={`${step.title}`}/>)
                    }
                </DisplayBox>
            </Col>
        )
    })

    return (
        <>

            <ModeEmploiPresentation/>

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
                                    Mode d'emploi step-by-step pour analyser vos datas.
                                </PresentationTitle>
                            </div>
                        </DisplayBox>
                    </Col>

                    { steps }
                    
                </Row>
            </Container>

        </>
    )
}

export default ModeEmploi;

// BenFord Loap'