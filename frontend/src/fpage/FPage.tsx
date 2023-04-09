import './index.css';
import GetSummonerName from './getSummonerName'; 
import { useState } from 'react';

function FPage(){
  return (
    <div className='test'>
    <div className="img">
      <img src={require("../../public/PajtimGGBanner3.png")} width="708mm" height="252mm" alt="Pajtim GG Banner"/>
    </div>

    <div className="bar">
      <GetSummonerName />
    </div>

     <div className="img2">
      <a href="http://localhost:3000">
        <img src={require("../../public/PajtimGG2.png")} width="100px" height="25px" alt="Pajtim GG" />
      </a>
    </div>

     <div className="impressum">
    </div>
  </div>
  );

}

export default FPage;