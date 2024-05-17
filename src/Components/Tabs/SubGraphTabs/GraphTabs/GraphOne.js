import { useSelector } from 'react-redux';
import { Line, LineChart, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PresentationTitle, Text } from '../../../../StyledComponents/Title';

const BatonGraph = () => {

    const darkMode = useSelector((state) => state.darkMode);
    const benfordizedDoc = useSelector((state) => state.importFile)
    const { benfordizedData, dataSet, file} = benfordizedDoc.file

    console.log("benfordizedData from pies", benfordizedData)
    console.log("dataSet from pies", dataSet)
    console.log("file from pies", file)
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}]
    return(
        <>

            <Text margin="30px 0px -20px 20px" darkmode={`${darkMode}`}>
                <span>> Graphiques détaillés en batons :</span>
            </Text>

            <div style={{marginTop: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <BarChart
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                width={600}
                height={300}
                data={benfordizedData}>
                <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
                <XAxis dataKey="n" />
                <YAxis />
                <Tooltip/>
                <Legend />
                <Bar dataKey="BenfordFrequency" name="Réparition loi de Benford" fill="#8884d8" />
                <Bar dataKey="dataFrequency" name="Réparition de vos données" fill="#82ca9d" />
                </BarChart>
            </div>

            <div style={{marginTop: 80, marginBottom: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <BarChart
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                width={600}
                height={300}
                data={benfordizedData}>
                <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
                <XAxis dataKey="n" />
                <YAxis />
                <Tooltip/>
                <Legend />
                <Bar dataKey="BenfordFrequency" stackId="a" name="Réparition loi de Benford" fill="#8884d8" />
                <Bar dataKey="dataFrequency" stackId="a" name="Réparition de vos données" fill="#82ca9d" />
                </BarChart>
            </div>

            <div style={{marginTop: 80, marginBottom: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <BarChart
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                width={600}
                height={300}
                data={benfordizedData}>
                <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
                <XAxis dataKey="n" />
                <YAxis />
                <Tooltip/>
                <Legend />
                <Bar dataKey="BenfordFrequencyPercent" name="Réparition loi de Benford" fill="#8884d8" background={{ fill: '#eee' }}/>
                <Bar dataKey="dataFrequencyPercent" name="Réparition de vos données" fill="#82ca9d" />
                </BarChart>
            </div>
        </>
    )
    
}

export default BatonGraph;