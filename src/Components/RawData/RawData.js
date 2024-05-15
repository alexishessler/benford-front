import { useSelector } from 'react-redux';
import './RawData.css';
import { PresentationTitle, Text } from '../../StyledComponents/Title';

const RawData = () => {

    const darkMode = useSelector((state) => state.darkMode);
    const benfordizedDoc = useSelector((state) => state.importFile)
    const { benfordizedData, dataSet, file, keys} = benfordizedDoc.file

    console.log("FROM RAW DATA ", benfordizedData)

    const visualTable = benfordizedData.map(number => {
        return (
            <tr>
                <td style={{borderTopLeftRadius: number.n === 1 && 10 , borderBottomLeftRadius: number.n === 9 && 10, padding: 5, backgroundColor: "#eee", color:"#000"}}>{number.n}</td>
                <td style={{padding: 5, backgroundColor: "#8884d8", color:"#FFF"}}>{number.BenfordFrequency}</td>
                <td style={{padding: 5, backgroundColor: "#82ca9d", color:"#FFF"}}>{number.dataFrequency}</td>
                <td style={{padding: 5, backgroundColor: "#8884d8", color:"#FFF"}}>{number.BenfordFrequencyPercent}%</td>
                <td style={{padding: 5, backgroundColor: "#82ca9d", color:"#FFF"}}>{number.dataFrequencyPercent}%</td>
                <td style={{padding: 5, backgroundColor: "#eee", color:"#000"}}>{number.differenceFrequency}</td>
                <td style={{borderTopRightRadius: number.n === 1 && 10, borderBottomRightRadius: number.n === 9 && 10, padding: 5, backgroundColor: "#eee", color:"#000"}}>{number.differenceFrequencyPercent}</td>
            </tr>
        )
    })

    return(
        <>

            <Text margin="30px 0px 10px 20px" darkmode={`${darkMode}`}>
                <span>> Toutes les données en brut :</span>
            </Text>
            
            <div style={{paddingLeft: 50, paddingRight: 50, paddingBottom: 50, display: 'flex', alignItems:'center', justifyContent:'center'}}>
                <table>
                    <td style={{color: darkMode === true ? '#FFF' : "#000"}}><h4>1er chiffre</h4></td>
                    <td style={{color: darkMode === true ? '#FFF' : "#000"}}><h4>Occurences normales selon Benford</h4></td>
                    <td style={{color: darkMode === true ? '#FFF' : "#000"}}><h4>Occurences réelles de vos données</h4></td>
                    <td style={{color: darkMode === true ? '#FFF' : "#000"}}><h4>Fréquence relative selon Benford</h4></td>
                    <td style={{color: darkMode === true ? '#FFF' : "#000"}}><h4>Fréquence relative de vos données</h4></td>
                    <td style={{color: darkMode === true ? '#FFF' : "#000"}}><h4>Différence des occurences</h4></td>
                    <td style={{color: darkMode === true ? '#FFF' : "#000"}}><h4>Différences des fréquences relatives</h4></td>
                    {visualTable}
                    {/* <td style={{color: darkMode === true ? '#FFF' : "#000"}}><p>1er chiffre</p></td>
                    <td style={{color: darkMode === true ? '#FFF' : "#000"}}><p>Occurences normales selon Benford</p></td>
                    <td style={{color: darkMode === true ? '#FFF' : "#000"}}><p>Occurences réelles de vos données</p></td>
                    <td style={{color: darkMode === true ? '#FFF' : "#000"}}><p>Fréquence relative selon Benford</p></td>
                    <td style={{color: darkMode === true ? '#FFF' : "#000"}}><p>Fréquence relative de vos données</p></td>
                    <td style={{color: darkMode === true ? '#FFF' : "#000"}}><p>Différence des occurences</p></td>
                    <td style={{color: darkMode === true ? '#FFF' : "#000"}}><p>Différences des fréquences relatives</p></td> */}
                </table>
            </div>
        </>
    )
    
}

export default RawData;