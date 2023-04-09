import './App.normalize.css'
import FPage from './components/fpage/FPage'
import GetSummonerName from './components/fpage/seachForSummoner';

function App() {
  return (
    <div>
      <head>
        <div className='Head'><FPage /></div>
      </head>
      <body>
        <div className='Body'><GetSummonerName /></div>
      </body>
    </div>
  );
}

export default App;
