import React, { useRef } from 'react';
import axios from 'axios';
import './App.css';
import './App.normalize.css';

function App() {

  //const summonerName = summonerNameRef.current.value;

  return (
    <div>
      <div className="img">
        <img src={require("./assets/PajtimGGBanner3.png")} width="708mm" height="252mm" alt="Pajtim GG Banner"/>
      </div>

      <div className="bar">
        <input type="text" placeholder="Summoner Name..." id="summonerName"/>
      </div>

      <div className="Search">
        <button onClick={getSummoner}>Search</button>
        <button id="na">NA</button>
        <button id="euw">EUW</button>
      </div>

      <div className="img2">
        <a href="http://localhost:3001">
          <img src={require("./assets/PajtimGG2.png")} width="100px" height="25px" alt="Pajtim GG" />
        </a>
      </div>

      <div className="impressum">
      </div>
    </div>
  );
}

function getSummoner() {
  console.log('test')
  
  // Implementation for getSummoner function
}

export default App;
