import React from 'react';
import './App.css';
import './App.normlize.css';

function App() {
  return (
    <div>
      <div className="img">
        <img src="./assets/PajtimGGBanner3.png" width="708mm" height="252mm" alt="Pajtim GG Banner"/>
      </div>

      <div className="bar">
        <input type="text" placeholder="Summoner Name..." id="summonerName" />
      </div>

      <div className="Search">
        <a href="summoners/EUW1/Yusi" className="active">
          <button onClick={getSummoner}>Search</button>
        </a>
        <button id="na">NA</button>
        <button id="euw">EUW</button>
      </div>

      <div className="img2">
        <a href="localhost:4200">
          <img src="./assets/PajtimGG2.png" width="100px" height="25px" alt="Pajtim GG" />
        </a>
      </div>

      <div className="impressum">
      </div>
    </div>
  );
}

function getSummoner() {
  // Implementation for getSummoner function
}

export default App;
