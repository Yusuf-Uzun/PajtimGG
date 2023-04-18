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
          <div>
                <a href="http://localhost:5173/#/champions">
                    <h4>All Champions</h4>
                </a>
            </div>
      </body>
    </html>
  );
}

export default HomePage;
