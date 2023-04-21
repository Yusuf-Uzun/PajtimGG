import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom";
import './noregionsum.css';

type RegionType = string;
type ProfileIconType = number;

interface Summoner {
    name: string;
    profileIconId: ProfileIconType;
    region: RegionType;
}

function NoRegionSummoner(){
    const { summonerName } = useParams();

    const [dictOfSummoner, SetDictOfSummoner] = useState<Summoner[]>([]);
    const [region, SetRegion] = useState('');
    
    useEffect(() => {
        axios.get(`http://localhost:3888/api/summoners/${summonerName}`)
            .then(res => {
                const summonerArray: Summoner[] = res.data.map((summonerData: any) => {
                    const summoner: Summoner = {
                      name: summonerData.name,
                      profileIconId: summonerData.profileIconId,
                      region: summonerData.region,
                    };
                    return summoner;
                  });
                SetDictOfSummoner(summonerArray);    
                SetRegion(region);
            })
    }, [])

    return(
        <tbody>
            <table>
                {dictOfSummoner.map((summoner) => (
                    <div>
                        <tr>
                            <a href={`http://localhost:5173/#/summoners/${summoner.region}/${summonerName}`}>
                                <td>{summoner.region}</td>
                                <td> <img className="multipleIcons" 
                                    src={`profileIcons/${summoner.profileIconId}.png`} 
                                        width={50} 
                                        height={50}/>    
                                    {summoner.name}
                                </td> 
                            </a>
                        </tr>
                    </div>
                ))}
            </table>
        </tbody>
    )
}
export default NoRegionSummoner