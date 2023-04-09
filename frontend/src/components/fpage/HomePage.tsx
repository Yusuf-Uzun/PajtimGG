import FPage from './FPage'
import GetSummonerName from './seachForSummoner';

function HomePage() {
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

export default HomePage;
