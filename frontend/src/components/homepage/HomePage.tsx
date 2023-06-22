import FPage from './FPage'
import GetSummonerName from './seachForSummoner';
import { LOCALHOST_URL, FRONTEND_PORT } from '../Constants';

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
                <a href={`${LOCALHOST_URL}${FRONTEND_PORT}/#/champions`}>
                    <h4>All Champions</h4>
                </a>
            </div>
      </body>
    </html>
  );
}

export default HomePage;
