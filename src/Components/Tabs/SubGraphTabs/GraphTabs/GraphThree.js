import { useSelector } from 'react-redux';
import { RadialBarChart, RadialBar, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, PieChart, Pie, ComposedChart, Line, LineChart, AreaChart, Area, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';
import { PresentationTitle, Text } from '../../../../StyledComponents/Title';


const CamembGraph = () => {

    const darkMode = useSelector((state) => state.darkMode);
    const benfordizedDoc = useSelector((state) => state.importFile)
    const { benfordizedData, dataSet, file} = benfordizedDoc.file

    console.log("benfordizedData from pies", benfordizedData)
    console.log("dataSet from pies", dataSet)
    console.log("file from pies", file)
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}]
    
    const cardinal = curveCardinal.tension(0.2);

    const style = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
    };

    return(
        <>

            <Text margin="30px 0px -20px 20px" darkmode={`${darkMode}`}>
                <span>> Autres graphiques détaillés :</span>
            </Text>

            <div style={{marginTop: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <ComposedChart width={600} height={300} data={benfordizedData}>
                <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
                <XAxis dataKey="n" />
                <YAxis />
                <Tooltip/>
                <Legend />
                <Area type="monotone" dataKey="BenfordFrequency" name="Réparition loi de Benford" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="dataFrequency" name="Réparition de vos données" fill="#82ca9d" barSize={20}/>
                </ComposedChart>
            </div>

            <div style={{marginTop: 0, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{marginTop: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <PieChart width={300} height={300} data={benfordizedData} >
                <Pie
                    dataKey="BenfordFrequencyPercent"
                    startAngle={180}
                    endAngle={0}
                    data={benfordizedData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    name="Réparition loi de Benford"
                    label
                />
                </PieChart>
                </div>
                <div style={{marginTop: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <PieChart width={300} height={300} data={benfordizedData} >
                <Pie
                    dataKey="dataFrequency"
                    startAngle={180}
                    endAngle={0}
                    data={benfordizedData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#82ca9d"
                    name="Réparition loi de Benford"
                    label
                />
                </PieChart>
                </div>
            </div>

            <div style={{marginTop: 0, marginBottom: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <RadarChart width={600} height={300} cx="50%" cy="50%" outerRadius="80%" data={benfordizedData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="n" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Réparition loi de Benford" dataKey="BenfordFrequency" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Réparition de vos données" dataKey="dataFrequency" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            
                </RadarChart>
            </div>

            {/* <div style={{marginTop: 80, marginBottom: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <RadialBarChart width={600} height={300} cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={benfordizedData}>
                <RadialBar
                    minAngle={15}
                    label={{ position: 'insideStart', fill: '#fff' }}
                    background
                    clockWise
                    dataKey="BenfordFrequency"
                />
                <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        
            
                </RadialBarChart>
            </div> */}
        </>
    )
    
}

export default CamembGraph;