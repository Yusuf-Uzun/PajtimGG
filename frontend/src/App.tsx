import { 
  Route,
  Routes,
 } from 'react-router-dom';
import './App.normalize.css'
import HomePage from './components/homepage/HomePage';
import SummonerPage from './components/summoner/SummonerPage';
import UserSummonerPage from './components/summoner/UserSummonerPage';
import AllChampionPage from './components/champion/AllChampionPage';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/summoners/:region/:summonerName" element={<UserSummonerPage />}></Route>
        <Route path="/summoner" element={<SummonerPage />}></Route>
        <Route path="/champions" element={<AllChampionPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
