import axios from "axios";
import { useState } from "react";

let dataInfo: any;
let summonerID: any; 
let summonerLevel: any;

function GetSummonerName(){
    const [SummonerName, SetSummonerName] = useState('');
    console.log(SummonerName);
    let URI = "http://localhost:6969/summoners/EUW1/";

    function findSummoner(name: string){
        URI += name 
        axios.get(URI)
        .then(({data}) => console.log(data))
        .then(() => {
            summonerID = dataInfo['0'];
            summonerLevel = dataInfo['1'] ;
          })
    }
    return(
        <div className="Container">
            <div>TEST1234</div>
        <div className="TextBox">
            <input type={"text"} placeholder="Summoner Name..." onChange={e => SetSummonerName(e.target.value)} value={SummonerName}/>
        </div>
        <div className="Search">
            <button onClick={() => findSummoner(SummonerName)}>Search</button>
            <button id="na">NA</button>
            <button id="euw">EUW</button>
        </div>
        </div>
    );
}

export default GetSummonerName;