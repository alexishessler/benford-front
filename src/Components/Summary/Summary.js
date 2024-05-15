import { useDispatch, useSelector } from 'react-redux';
import { PresentationTitle, Text } from '../../StyledComponents/Title';
import { importFile } from '../../redux/actions/importfile.action';
import { RadialBarChart, RadialBar, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, PieChart, Pie, ComposedChart, Line, LineChart, AreaChart, Area, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';
import './Summary.css';

const Summary = () => {

    const dispatch = useDispatch()

    const darkMode = useSelector((state) => state.darkMode);
    const benfordizedDoc = useSelector((state) => state.importFile)
    const { benfordizedData, dataSet, file, sentFile, keys, columnname, separator, numberOfInitalResults, matchingScore } = benfordizedDoc.file


    console.log("FROM SUMMARY", benfordizedDoc)

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

            <Text margin="30px 0px -20px 20px" darkmode={`${darkMode}`}>
                <span>> Fichier Analysé :</span>
                <span style={{marginLeft:5}}><strong>{sentFile.name}</strong></span>
            </Text>

            <Text margin="30px 0px -20px 20px" darkmode={`${darkMode}`}>
                <span style={{marginBottom:5}}>> Indications sur le traitement </span>
                <li style={{marginTop:7}}>
                    Colonne traitée : <span className="SummaryColLink SummaryColLink-selected" style={{paddingTop:2, paddingBottom:2, margin: 0}}>{columnname}</span>
                </li>
                <li style={{marginTop:3}}>
                    Lignes à traiter - <i>sans distinction de type de données ou anomalies</i> : 
                    <strong style={{marginLeft:5}}>{numberOfInitalResults}</strong>
                </li>
                <li style={{marginTop:3}}>
                    Lignes effectivement traitées - <i>données converties exploitables</i> : 
                    <strong style={{marginLeft:5}}>{dataSet.length}</strong> 
                    { 
                        numberOfInitalResults-dataSet.length > numberOfInitalResults 
                            ? ` ( + ${numberOfInitalResults-dataSet.length} )`
                            : ` ( - ${numberOfInitalResults-dataSet.length} )`
                    }
                </li>
            </Text>

            <Text margin="60px 0px -60px 20px" darkmode={`${darkMode}`}>
                <span>> Score du matching LoiDeBenford.fr :</span>
            </Text>

            <div style={{marginTop: 80, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
                <Text margin="0px 20px 30px 20px" darkmode={`${darkMode}`}>
                    <span style={{backgroundColor: matchingScore > 3 ? "#82ca9d" : "#cf2e2e", padding: 20, borderRadius:15, color: "#FFF"}}><strong>{matchingScore} </strong> / 5</span>
                </Text>
            </div>

            <Text margin="40px 0px -60px 20px" darkmode={`${darkMode}`}>
                <span>> Premiers résultats enrichis :</span>
            </Text>

            <div style={{marginTop: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <ComposedChart width={600} height={300} data={benfordizedData}>
                <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
                <XAxis dataKey="n" />
                {/* <YAxis /> */}
                {/* <Tooltip/> */}
                <Legend />
                <Area type="monotone" dataKey="BenfordFrequency" name="Réparition Loi de Benford" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="dataFrequency" name="Réparition de vos données" fill="#82ca9d" barSize={20}/>
                </ComposedChart>
            </div>
        
            <Text margin="40px 0px -20px 20px" darkmode={`${darkMode}`}>
                <span>> Analyser une autre colonne du fichier :</span>
            </Text>

            <div className="Summary">
                {OtherColumns}
            </div>

        </>
    )
    
}

export default Summary;