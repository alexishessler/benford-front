import { useDispatch, useSelector } from 'react-redux';
import { PresentationTitle, Text } from '../../StyledComponents/Title';
import { importFile } from '../../redux/actions/importfile.action';
import { RadialBarChart, RadialBar, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, PieChart, Pie, ComposedChart, Line, LineChart, AreaChart, Area, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';
import './Export.css';

const Export = () => {

    const dispatch = useDispatch()

    const darkMode = useSelector((state) => state.darkMode);
    const benfordizedDoc = useSelector((state) => state.importFile)
    const { benfordizedData, dataSet, file, sentFile, keys, columnname, separator, numberOfInitalResults } = benfordizedDoc.file


    console.log("FROM SUMMARY", sentFile)

    const OtherColumns = keys.map((col,i) => {
        return (
            <p onClick={() => reSendSameFile(col)} className={`SummaryColLink ${(columnname == col) && 'SummaryColLink-selected' }`} key={i}>{col}</p>
        )
    })

    const reSendSameFile = (col) => {
        const data = new FormData();
        data.append('file', sentFile)
        data.append('columnname', col)
        data.append('separator', separator)
        dispatch(importFile(data, sentFile))
    }

    return(
        <>

            <Text margin="30px 0px 40px 20px" darkmode={`${darkMode}`}>
                <span>> Export des données :</span>
            </Text>
            <Text margin="30px 0px 40px 20px" darkmode={`${darkMode}`}>
                <span>[ Fonctionnalité en cours de développement ]</span>
            </Text>

        </>
    )
    
}

export default Export;