import { useParams } from 'react-router-dom';
import './spage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Logo from './Logo';
import RefreshButton from './RefreshButton';
import { Parallax } from 'react-parallax';
import PajtimGGPic from './PajtimGGPic';
import { LOCALHOST_URL, BACKEND_PORT } from '../Constants';

import { QUEUE_TYPE_FLEX, QUEUE_TYPE_SOLO } from '../Constants';
import { stat } from 'fs';

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
    
    useEffect(() => {
        getUser();
    }, [])
    const getUser = async () => {
        try {
            const res = await axios.get(`${LOCALHOST_URL}${BACKEND_PORT}/summoners/${region}/${summonerName}`);
            SetLevel(res.data['sum_info'].summonerLevel);
            SetProfileIcon(`profileIcons/${res.data['sum_info'].profileIconId}.png`);
    
            let helpBestChamp: ChampType[] = [];
            let helpMasteryPoints: MasteryType[] = [];
            for (let i = 0; i < res.data['best_champs'].length; i++) {
                helpBestChamp.push(res.data['best_champs'][i]);
                helpMasteryPoints.push(res.data['mastery_points'][i]);
            }
            SetChampAndMastery(() => helpBestChamp.reduce((acc: any, curr, index) => {
                acc[curr] = helpMasteryPoints[index];
                return acc;
            }, {}));
            
            await getElo(res);
        } catch (error) {
            // Handle error
        }
    }
    
    

    async function getElo(res: any){
        let rank: string = res.data['sum_ranked_stats']['0']['tier']
        const sum_ranked_stats = res.data.sum_ranked_stats;

        for (const stats of sum_ranked_stats) {
            if (stats.queueType === "RANKED_SOLO_5x5") {
                SetElo(`${stats.tier}  ${stats.rank}`);
                const eloForIcon = stats.tier.toLocaleLowerCase();
                SetRankedIcon(`rankedIcons/${eloForIcon}.png`);
                const wins = stats.wins;
                const losses = stats.losses;
                const winrateCalc = ((wins/(wins+ losses))*100).toFixed(0);
                SetWinrate(`${wins}W  ${losses}L Winrate ${winrateCalc}%`)

            } else if (stats.queueType === "RANKED_FLEX_SR") {
                SetFlexElo(`${stats.tier}  ${stats.rank}`);
                const flexEloForIcon = stats.tier.toLocaleLowerCase();
                SetFlexIcon(`rankedIcons/${flexEloForIcon}.png`);
                const wins = stats.wins;
                const losses = stats.losses;
                const winrateCalc = ((wins/(wins+ losses))*100).toFixed(0);
                SetFlexElo(`${wins}W  ${losses}L Winrate ${winrateCalc}%`)
            }
          }
    }
    return (
        <>
            <Parallax strength={200} className='SummonerData, container'>
                <div>
                    <RefreshButton />
                </div>
                    <div className='statsContainer'>
                    <div>   
                        <h2><b className='important'>{summonerName}</b></h2>
                        <div className='Test'>
                        <img src={profileIcon} className='profileIconImg' width={150} height={150}></img>
                        </div>
                        <div className='levelText'>{level}</div>
                    </div>
                    <div className='eloContainer'>
                        <div><h4>Flex-Rangliste: {flexElo} {flexWinrate} <img src={flexIcon} width={100} height={100}/></h4></div>
                        <div><h4>Solo-Rangliste: {elo} {winrate} <img src={rankedIcon} width={100} height={100}/></h4></div>
                        <PajtimGGPic />
                    </div>
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
        </>
    );
}
export default UserSummonerPage;