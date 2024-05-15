import { useParams } from "react-router-dom";
import HomeIntro from '../../Components/HomeIntro/HomeIntro';
import HomeUpload from '../../Components/HomeUpload/HomeUpload';
import HomeResults from '../../Components/HomeResults/HomeResults';
import { AnalysePresentation } from '../../Components/HomeSections/HomeSections';
import './AnalyseScreen.css';

const AnalyseScreen = () => {
    const { exemplefile } = useParams();
    console.log("exemplefile", exemplefile)
    return (
        <>
            <AnalysePresentation exemplefile={exemplefile}/>
            <div className="AnalyseScreen">
                <HomeIntro exemplefile={exemplefile}/>
                <div className="AnalyseScreen_display">
                    <span id="scrollToUploaderDivTop"></span>
                    <HomeUpload/>
                    <HomeResults/> 
                </div>
            </div>
        </>
    )
}

export default AnalyseScreen;

// BenFord Loap'