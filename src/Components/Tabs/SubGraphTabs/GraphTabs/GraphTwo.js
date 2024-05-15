import { useSelector } from 'react-redux';
import { Line, LineChart, AreaChart, Area, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';
import { PresentationTitle, Text } from '../../../../StyledComponents/Title';


const LineGraph = () => {

    const darkMode = useSelector((state) => state.darkMode);
    const benfordizedDoc = useSelector((state) => state.importFile)
    const { benfordizedData, dataSet, file} = benfordizedDoc.file

    console.log("benfordizedData from pies", benfordizedData)
    console.log("dataSet from pies", dataSet)
    console.log("file from pies", file)
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}]
    
    const cardinal = curveCardinal.tension(0.2);
    
    return(
        <>

            <Text margin="30px 0px -20px 20px" darkmode={`${darkMode}`}>
                <span>> Graphiques détaillés en courbes :</span>
            </Text>

            <div style={{marginTop: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <LineChart width={600} height={300} data={benfordizedData}>
                <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
                <XAxis dataKey="n" />
                <YAxis />
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="BenfordFrequency" name="Réparition Loi de Benford" stroke="#8884d8" />
                <Line type="monotone" dataKey="dataFrequency" name="Réparition de vos données" stroke="#82ca9d" />
                </LineChart>
            </div>

            <div style={{marginTop: 80, marginBottom: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <AreaChart width={600} height={300} data={benfordizedData} >
                <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
                <XAxis dataKey="n" />
                <YAxis />
                <Tooltip/>
                <Legend />
                <Area type="monotone" stackId="1" dataKey="BenfordFrequency" name="Réparition Loi de Benford" stroke="#8884d8" fill="#8884d8"/>
                <Area type="monotone" stackId="1" dataKey="dataFrequency" name="Réparition de vos données" stroke="#82ca9d" fill="#82ca9d"/>
                </AreaChart>
            </div>

            <div style={{marginTop: 80, marginBottom: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <AreaChart width={600} height={300} data={benfordizedData} >
                <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
                <XAxis dataKey="n" />
                <YAxis />
                <Tooltip/>
                <Legend />
                <Area type="monotone" stackId="1" dataKey="BenfordFrequencyPercent" name="Réparition Loi de Benford" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3}/>
                <Area type="monotone" stackId="1" dataKey="dataFrequencyPercent" name="Réparition de vos données" stroke="#82ca9d" fill="#82ca9d"fillOpacity={0.3}/>
                </AreaChart>
            </div>
        </>
    )
    
}

export default LineGraph;