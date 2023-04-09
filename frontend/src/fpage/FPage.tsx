import './index.css';
import GetSummonerName from './getSummonerName'; 
import { useState } from 'react';

function FPage(){
  const [sumName, setSumName] = useState('');

  return(
      <div>
      <div className="img">
        <img src={require("../assets/PajtimGGBanner3.png")} width="708mm" height="252mm" alt="Pajtim GG Banner"/>
      </div>
  
      <div className="bar">
        <GetSummonerName />
      </div>

       <div className="img2">
        <a href="http://localhost:3000">
          <img src={require("../assets/PajtimGG2.png")} width="100px" height="25px" alt="Pajtim GG" />
        </a>
      </div>

       <div className="impressum">
      </div>
    </div>
  );

}

export default FPage;