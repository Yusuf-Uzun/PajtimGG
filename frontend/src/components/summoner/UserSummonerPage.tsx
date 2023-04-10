import { Await, useLoaderData, useParams } from 'react-router-dom';
import './spage.css';
import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { profile } from 'console';


function UserSummonerPage(){
    const { region, summonerName } = useParams();
    const [level, SetLevel] = useState(0);
    const [profileIcon, SetProfileIcon] = useState('');
    const [elo, SetElo] = useState('');
    const [winrate, SetWinrate] = useState('');

    const BACKEND_PORT = "6969";
    const BACKEND_URI = `http://localhost:${BACKEND_PORT}/summoners/${region}/${summonerName}`
    
    useEffect(() => {
        getUser();
    }, [])
    const getUser = () => {
        axios.get(BACKEND_URI)
            .then(res => {
                SetLevel(res.data['0'].summonerLevel)
                SetProfileIcon(`profileicon/${res.data['0'].profileIconId}.png`)    
                SetElo(res.data['2']['0']['tier'] + " " + res.data['2']['0']['rank'] + " " + 
                res.data['2']['0']['leaguePoints'] + " LP")
                const wins = res.data['2']['0']['wins']
                const losses = res.data['2']['0']['losses']
                const winrateCalc = ((wins/(wins+ losses))*100).toFixed(0);
                SetWinrate(wins + "W " + losses + "L Winrate " + winrateCalc + "%")
            })
    }
    return (
        <div>
            <div>   
                <h5>summoner: {summonerName}</h5>
                <h5>level: {level}</h5>
                <h5>iconid: {profileIcon}</h5>
                <img src={profileIcon} />
                <h5>elo: {elo}</h5>
                <h5>{winrate}</h5>
            </div>
            <div>
                <a href="http://localhost:5173/">
                    <img src="PajtimGG2.png" height={"20px"} width={"80px"}></img>
                </a>
            </div>
        </div>
    );
}
export default UserSummonerPage;