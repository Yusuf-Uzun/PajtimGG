import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom";

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
            })
    }, [])

    return(
        <div>
            {dictOfSummoner.map((summoner) => (
            <div className='content'>
                <span className='champ-name'>{`${summoner.name} \r ${summoner.profileIconId} \r ${summoner.region}`}</span>
            </div>
            ))}
        </div>
    )
}
export default NoRegionSummoner