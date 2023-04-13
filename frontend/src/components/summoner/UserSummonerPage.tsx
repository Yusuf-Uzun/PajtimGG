import { useParams } from 'react-router-dom';
import './spage.css';
import { SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';

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

    const [bestChamp, SetBestChamp] = useState<ChampType[]>([]);
    const [masteryPoints, SetMasteryPoints] = useState<MasteryType[]>([]);


    const BACKEND_PORT = "6969";
    const BACKEND_URI = `http://localhost:${BACKEND_PORT}/summoners/${region}/${summonerName}`
    
    useEffect(() => {
        getUser();
    }, [])
    let champAndMastery: [ChampType, MasteryType][] = [];
    const getUser = () => {
        axios.get(BACKEND_URI)
            .then(res => {
                console.log(res)
                SetLevel(res.data['sum_info'].summonerLevel)
                SetProfileIcon(`profileIcons/${res.data['sum_info'].profileIconId}.png`)

                if (res.data['2'] === 1){ // TODO: edit logic 
                    getRankedElo(res, 0)
                } 
                else{
                    getFlexElo(res)
                    getRankedElo(res, 1)
                }
                for(let i = 0; i < res.data['best_champs'].length; i++){
                    champAndMastery.push([res.data['best_champs'][i], res.data['mastery_points'][i]]);
                }
                SetBestChamp(champAndMastery.map(item => item[0]));
                SetMasteryPoints(champAndMastery.map(item => item[1]));

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
            <div id='SummonerData'>   
                <h5>summoner: {summonerName}</h5>
                <h5>level: {level}</h5>
                <img src={profileIcon} width={200} height={200}/>
                <h5>Flex Elo: {flexElo}, {flexWinrate} <img src={flexIcon} /></h5>

                <div>
                 {champAndMastery.map((item, idx) => (
                <div key={idx}>
                    <h5>{item[0]}</h5>
                    <h5>{item[1]}</h5>
                </div>
                ))}
                </div>


                <h5>Ranked Elo: {elo}, {winrate} <img src={rankedIcon} /></h5>
                
                </div>
                <div className='img'>
                    <a href="http://localhost:5173/">
                        <img src="PajtimGG2.png" height={"20px"} width={"80px"}></img>
                    </a>
                </div>
        </div>
    );
}
export default UserSummonerPage;