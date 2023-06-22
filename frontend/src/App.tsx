import { 
  Route,
  Routes,
 } from 'react-router-dom';
import './App.normalize.css'
import HomePage from './components/homepage/HomePage';
import SummonerPage from './components/summoner/SummonerPage';
import UserSummonerPage from './components/summoner/UserSummonerPage';
import AllChampionPage from './components/champion/AllChampionPage';
import NoRegionSummoner from './components/noregion/NoRegionSummoner';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/summoners/:region/:summonerName" element={<UserSummonerPage />}></Route>
        <Route path="/summoner" element={<SummonerPage />}></Route>
        <Route path="/champions" element={<AllChampionPage />}></Route>
        <Route path="/summoners//:summonerName" element={<NoRegionSummoner />}></Route>
      </Routes>
    </>
  );
}

export default App;
