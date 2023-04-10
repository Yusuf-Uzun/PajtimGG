import { 
  BrowserRouter,
  Route,
  Routes,
  useParams,
 } from 'react-router-dom';
import './App.normalize.css'
import HomePage from './components/fpage/HomePage';
import SummonerPage from './components/summoner/SummonerPage';
import UserSummonerPage from './components/summoner/UserSummonerPage';
import { lazy } from 'react'
import React from 'react';



function App() {
  const LazyComponent = lazy(() => import("./components/summoner/UserSummonerPage"))
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/summoners/:region/:summonerName" element={<UserSummonerPage />}></Route>
        <Route path="/summoner" element={<SummonerPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
