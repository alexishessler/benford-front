import { useState } from 'react';
import  BatonGraph  from './GraphTabs/GraphOne';
import  LineGraph  from './GraphTabs/GraphTwo';
import  CamembGraph  from './GraphTabs/GraphThree';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AiOutlineBarChart, AiOutlineAreaChart, AiFillPieChart } from "react-icons/ai";
import 'react-tabs/style/react-tabs.css';
import '../tabs.css';

const SubGraphTabs = () => {
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    return(
        <Tabs style={{marginTop: -10}}>
            <TabList style={{zIndex: 2}}>
                <Tab onClick={() => setSelectedSubTab(0)} style={{backgroundColor: `${selectedSubTab === 0 ? "#506dfc" : "#6c84fd"}`, color: "#FFFFFF", borderLeft: "none", borderRadius: "0 0 0 0", outline: "none", border: "none", boxShadow: "0px 1px 4px 0px rgba(73, 73, 73, 0.73)"}}>
                    <p style={{}}><AiOutlineBarChart style={{}}/> Batons</p>
                </Tab>
                <Tab onClick={() => setSelectedSubTab(1)} style={{backgroundColor: `${selectedSubTab === 1 ? "#506dfc" : "#6c84fd"}`, color: "#FFFFFF", borderRadius: "0 0 0 0", outline: "none", border: "none", boxShadow: "0px 1px 4px 0px rgba(73, 73, 73, 0.73)"}}>
                    <p style={{}}><AiOutlineAreaChart style={{}}/> Courbes</p>
                </Tab>
                <Tab onClick={() => setSelectedSubTab(2)} style={{backgroundColor: `${selectedSubTab === 2 ? "#506dfc" : "#6c84fd"}`, color: "#FFFFFF", borderRadius: "0 0 5px 0", outline: "none", border: "none", boxShadow: "0px 1px 4px 0px rgba(73, 73, 73, 0.73)"}}>
                    <p style={{}}><AiFillPieChart style={{}}/> Autres</p>
                </Tab>

            </TabList>
        
            <TabPanel>
                <BatonGraph/>
            </TabPanel>
            <TabPanel>
                <LineGraph/>
            </TabPanel>
            <TabPanel>
                <CamembGraph/>
            </TabPanel>
        </Tabs>
    )
    
}

export default SubGraphTabs;