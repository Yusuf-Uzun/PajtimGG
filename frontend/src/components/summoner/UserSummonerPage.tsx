import { useParams } from 'react-router-dom';
import './spage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Logo from './Logo';
import RefreshButton from './RefreshButton';
import { Parallax } from 'react-parallax';

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
                console.log(res);
                SetLevel(res.data['sum_info'].summonerLevel);
                SetProfileIcon(`profileIcons/${res.data['sum_info'].profileIconId}.png`);
                
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
                
                  
                
                getFlexElo(res)
                getRankedElo(res, 1)
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
            <Parallax strength={200} className='SummonerData, container'>
                <div>
                    <RefreshButton />
                </div>
                <div>   
                    <h1>Summoner: <b className='important'>{summonerName}</b></h1>
                    <div>Level: {level}</div>
                    <div className='pb'>
                        <img src={profileIcon} width={100} height={100}/>
                    </div>
                    <div>Flex Elo: {flexElo}, {flexWinrate} <img src={flexIcon} /></div>  
                    <div>Ranked Elo: {elo}, {winrate} <img src={rankedIcon} /></div>
                </div>
            </Parallax>
            <div>
            {Object.entries(champAndMastery).map(([champion, masteryPoints]) => (
                <Parallax className='image' bgImage={`splash/${champion}_0.jpg`} strength={500}>
                    <div className='content'>
                        <span className='champ-name'>{`${champion} \r ${masteryPoints}`}</span>
                    </div>
                </Parallax>
            ))}
            </div>
        </div>
    );
}
export default UserSummonerPage;