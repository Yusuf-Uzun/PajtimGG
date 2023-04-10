import { 
  Route,
  Routes,
 } from 'react-router-dom';
import './App.normalize.css'
import HomePage from './components/fpage/HomePage';
import SummonerPage from './components/summoner/SummonerPage';
import UserSummonerPage from './components/summoner/UserSummonerPage';


function App() {
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
