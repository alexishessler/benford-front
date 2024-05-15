import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Menu from './Components/Menu/Menu';
import AnalyseScreen from './Screens/AnalyseScreen/AnalyseScreen';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import InfoScreen from './Screens/InfoScreen/InfoScreen';
import NotFoundScreen from './Screens/NotFoundScreen/NotFoundScreen';
import './App.css';

const App = () => {

  useEffect(() => {
    const fetchApi = async () => {
      const { data } = await axios.get('http://193.134.250.229/api/test')
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
        <Route exact path="/analyse/exemple/:exemplefile">
            <AnalyseScreen/>
        </Route>
        <Route exact path="/explications">
            <InfoScreen/>
        </Route>
        {/* <Route exact path="/explications/exemple/population-communes">
            <AnalyseScreen/>
        </Route> */}
        <Route>
            <NotFoundScreen/>
        </Route>
    </Switch>
  </div>
  );
}

export default App;
