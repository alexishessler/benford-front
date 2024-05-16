import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Menu from './Components/Menu/Menu';
import Footer from './Components/Footer/Footer';
import AnalyseScreen from './Screens/AnalyseScreen/AnalyseScreen';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import LoiDeBenford from './Screens/LoiDeBenford/LoiDeBenford';
import ModeEmploi from './Screens/ModeEmploi/ModeEmploi';
import NotFoundScreen from './Screens/NotFoundScreen/NotFoundScreen';
import './App.css';

const App = () => {

  useEffect(() => {
    const fetchApi = async () => {
      const { data } = await axios.get(`${window.env.URL}/api/test`)
      console.log("Welcome To Benford Law App", data)
    }
    fetchApi()
  }, [])

  const darkMode = useSelector((state) => state.darkMode)

  return (
  <div className={`App App_${darkMode ? "dark" : 'light'}`}>
    <Menu/>
    <Switch>
        <Route exact path="/">
            <HomeScreen/>
        </Route>
        <Route exact path="/analyse">
            <AnalyseScreen/>
        </Route>
        <Route exact path="/loi-de-benford">
            <LoiDeBenford/>
        </Route>
        <Route exact path="/mode-emploi">
            <ModeEmploi/>
        </Route>
        <Route>
            <NotFoundScreen/>
        </Route>
    </Switch>
    <Footer/>
  </div>
  );
}

export default App;
