import { useParams } from 'react-router-dom';
import './spage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Logo from './Logo';
import RefreshButton from './RefreshButton';

type ChampType = string;
type MasteryType = number;

function UserSummonerPage(){
    const { region, summonerName } = useParams();
    const [level, SetLevel] = useState(0);
    const [profileIcon, SetProfileIcon] = useState('');
    const [flexElo, SetFlexElo] = useState('');
    const [flexWinrate, SetFlexWinrate] = useState('');
    const [rankedIcon, SetRankedIcon] = useState('');
    const [flexIcon, SetFlexIcon] = useState('');
    const [elo, SetElo] = useState('');
    const [winrate, SetWinrate] = useState('');
    const [champAndMastery, SetChampAndMastery] = useState({});


    const BACKEND_PORT = "3888";
    const BACKEND_SUMMONER_INFO_URI = `http://localhost:${BACKEND_PORT}/summoners/${region}/${summonerName}`
    
    useEffect(() => {
        getUser();
    }, [])
    const getUser = () => {
        axios.get(BACKEND_SUMMONER_INFO_URI)
            .then(res => {
                SetLevel(res.data['sum_info'].summonerLevel);
                SetProfileIcon(`profileIcons/${res.data['sum_info'].profileIconId}.png`);
                
                
                if (res.data['2'] === 1){ // TODO: edit logic 
                    getRankedElo(res, 0)
                } 
                else{
                    getFlexElo(res)
                    getRankedElo(res, 1)
                }
                let helpBestChamp: ChampType[] = [];
                let helpMasteryPoints: MasteryType[] = [];
                for(let i = 0; i < res.data['best_champs'].length; i++){
                    helpBestChamp.push(res.data['best_champs'][i]);
                    helpMasteryPoints.push(res.data['mastery_points'][i]);
                }
                SetChampAndMastery(() => helpBestChamp.reduce((acc: any, curr, index) => {
                    acc[curr] = helpMasteryPoints[index];
                    return acc;
                  }, {}));
                console.log(res.data['sum_info'].puuid);
                //getLastGame(res.data['sum_info'].puuid, region, BACKEND_PORT);
                })
        }
    

    function getFlexElo(res: any){
        let flexRank: string = res.data['sum_ranked_stats']['0']['tier']
        SetFlexElo(flexRank + " " + res.data['sum_ranked_stats']['0']['rank'] + " " + 
        res.data['sum_ranked_stats']['0']['leaguePoints'] + " LP")
        flexRank = flexRank.toLowerCase()
        SetFlexIcon(`rankedIcons/${flexRank}.png`);
        const wins = res.data['sum_ranked_stats']['0']['wins']
        const losses = res.data['sum_ranked_stats']['0']['losses']
        const winrateCalc = ((wins/(wins+ losses))*100).toFixed(0);
        SetFlexWinrate(wins + "W " + losses + "L Winrate " + winrateCalc + "%")
    }

    function getRankedElo(res: any, idx: number){
        let rankedRank: string = res.data['sum_ranked_stats'][idx]['tier']
        SetElo(res.data['sum_ranked_stats'][idx]['tier'] + " " + res.data['sum_ranked_stats']['1']['rank'] + " " + 
        res.data['sum_ranked_stats'][idx]['leaguePoints'] + " LP")
        rankedRank = rankedRank.toLowerCase()
        SetRankedIcon(`rankedIcons/${rankedRank}.png`);
        const wins = res.data['sum_ranked_stats'][idx]['wins']
        const losses = res.data['sum_ranked_stats'][idx]['losses']
        const winrateCalc = ((wins/(wins+ losses))*100).toFixed(0);
        SetWinrate(wins + "W " + losses + "L Winrate " + winrateCalc + "%")
    }

    return (
        <div>
            <div>
                <RefreshButton />
            </div>
            <div id='SummonerData'>   
                <h5>summoner: {summonerName}</h5>
                <h5>level: {level}</h5>
                <img src={profileIcon} width={200} height={200}/>
                <h5>Flex Elo: {flexElo}, {flexWinrate} <img src={flexIcon} /></h5>  
                <h5>Ranked Elo: {elo}, {winrate} <img src={rankedIcon} /></h5>

                <div> <h3>most played champions with mastery points:</h3>
                    {Object.entries(champAndMastery).map(([champion, masteryPoints]) => (
                    <p> <img 
                    src={`championIcons/${champion}.png`}
                    title={`${champion}`}
                    alt={`${champion}`} />
                    <h5>
                        {champion}
                    </h5>
                    <h5>
                        {`Mastery Points: ${masteryPoints}`}
                    </h5>
                    </p>))}
                </div>
                <Logo />
                </div>
        </div>
    );
}
export default UserSummonerPage;