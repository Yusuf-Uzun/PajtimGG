import FPage from './FPage'
import GetSummonerName from './seachForSummoner';

function HomePage() {
  return (
    <html>
      <head>
      </head>
      <body>
        <div className='Head'><FPage /></div>
        <div className='Body'>
          <GetSummonerName />
          </div>
      </body>
    </html>
  );
}

export default HomePage;
