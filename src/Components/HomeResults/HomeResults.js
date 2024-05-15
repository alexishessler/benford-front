import { useState } from 'react';
import { StyledDisplayBox as DisplayBox } from '../../StyledComponents/DisplayBox';
import { PresentationTitle, Text } from '../../StyledComponents/Title';
import MainTabs from '../../Components/Tabs/MainTabs/MainTabs';
import { useSelector } from 'react-redux';
import loader from '../../LoaderImg/loader.gif';
import { StickyContainer, Sticky } from 'react-sticky';

const HomeResults = () => {
    const darkMode = useSelector((state) => state.darkMode);
    const importFile  = useSelector((state) => state.importFile);

    return(
        <DisplayBox
            className={""}
            minHeight="200px"
            margin="0px 0px 0px 20px"
            padding="0px"
            width="70%"
            darkmode={`${darkMode}`}>
            <PresentationTitle darkmode={`${darkMode}`}>
                Visualisez les résultats du matching !
            </PresentationTitle>
            {
                !importFile.status && !importFile.file?.dataSet && (
                    <Text darkmode={`${darkMode}`}>
                        [ Aucun matching en cours ]
                    </Text>
                ) 
            }
            {
                importFile.status === 'Loading' && (
                    <>
                        <Text margin="20px 0px -20px 20px" darkmode={`${darkMode}`}>
                            [ Chargement de votre fichier en cours ] ...
                        </Text>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <img src={loader} alt="loading..."/>
                        </div>
                    </>
                ) 
            }
            {
                importFile.status === 'Error' && (
                    <Text darkmode={`${darkMode}`}>
                        [ { importFile.error.message ? importFile.error.message : importFile.error  }  ] 
                    </Text>
                ) 
            }
            {
                !importFile.status && importFile.file?.dataSet && (
                    <div style={{overflowWrap: 'break-word'}}>
                        <>


                            
                            <MainTabs/>
                            {/* <Text darkmode={`${darkMode}`}>
                                [ {
                                    importFile.file.dataSet.map(nb => <span>{nb} - </span>)
                                } ]
                            </Text> */}
                        </>
                    </div>
                ) 
            }
        </DisplayBox>
    )
}

export default HomeResults;