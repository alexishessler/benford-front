import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SubGraphTabs from "../SubGraphTabs/SubGraphTabs";
import RawData from "../../RawData/RawData";
import Summary from "../../Summary/Summary";
import Export from "../../Export/Export";
import { AiFillDashboard, AiOutlineRadarChart, AiOutlineOrderedList, AiOutlineCloudDownload } from "react-icons/ai";
import 'react-tabs/style/react-tabs.css';
import '../tabs.css';

const MaintTabs = () => {

    const [selectedTab, setSelectedTab] = useState(0)

    return(
        <Tabs>
            <TabList style={{borderRadius: "0, 0, 0, 0", zIndex: 1}}>
                <Tab onClick={() => setSelectedTab(0)} style={{backgroundColor: `${selectedTab === 0 ? "#506dfc" : "#546de5"}`, color: "#FFFFFF", border: "none", borderRadius: "0, 0, 0, 0", boxShadow: "0px 1px 4px 0px rgba(73, 73, 73, 0.73)" }}>
                    <p><AiFillDashboard/> Résumé</p>
                </Tab>
                <Tab onClick={() => setSelectedTab(1)} style={{backgroundColor: `${selectedTab === 1 ? "#506dfc" : "#546de5"}`, color: "#FFFFFF", border: "none", borderRadius: "0, 0, 0, 0", boxShadow: "0px 1px 4px 0px rgba(73, 73, 73, 0.73)" }}>
                    <p><AiOutlineRadarChart/> Graphiques</p>
                </Tab>
                <Tab onClick={() => setSelectedTab(2)} style={{backgroundColor: `${selectedTab === 2 ? "#506dfc" : "#546de5"}`, color: "#FFFFFF", border: "none", borderRadius: "0, 0, 0, 0", boxShadow: "0px 1px 4px 0px rgba(73, 73, 73, 0.73)" }}>
                    <p><AiOutlineOrderedList/> Données brutes</p>
                </Tab>
                <Tab onClick={() => setSelectedTab(3)} style={{backgroundColor: `${selectedTab === 3 ? "#506dfc" : "#546de5"}`, color: "#FFFFFF", border: "none", borderRadius: "0 5px 5px 0", boxShadow: "0px 1px 4px 0px rgba(73, 73, 73, 0.73)"}}>
                    <p><AiOutlineCloudDownload/> Exporter</p>
                </Tab>
            </TabList>
        
            <TabPanel>
                <Summary/>
            </TabPanel>
            <TabPanel>
                <SubGraphTabs/>
            </TabPanel>
            <TabPanel>
                <RawData/>
            </TabPanel>
            <TabPanel>
                <Export/>
            </TabPanel>
        </Tabs>
    )
    
}

export default MaintTabs;