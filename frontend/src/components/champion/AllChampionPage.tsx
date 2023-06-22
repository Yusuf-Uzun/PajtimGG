import axios from "axios"
import { useEffect, useState } from "react"
import './champpage.css'
import PajtimGGPic from "../summoner/PajtimGGPic";
import { BACKEND_PORT, LOCALHOST_URL} from '../Constants.js';
function AllChampionPage(){
    const BACKEND_ALL_CAMP_URI = `${LOCALHOST_URL}${BACKEND_PORT}/api/champions`;
    const [listChampions, SetListChampions] = useState([]);
    
    useEffect(() => {
        get_champions();
    }, [])  

    const get_champions = async () => {
        try {
            const championData = await axios.get(BACKEND_ALL_CAMP_URI);
            SetListChampions(championData.data);
        } catch (error) {
            // TODO: Handle error
        }
    }
    
    return (
        <>
            <div>
                <PajtimGGPic />
            </div>
            <div className='championpage'>
                {listChampions.map((champion) =>(
                    <div>
                    <h5 key={champion}>{champion}</h5>
                    <img src={`championIcons/${champion}.png`} title={`${champion}`}
                        alt={`${champion}`}></img>
                    </div>
                ))}
            </div>
        </>
    )
}
export default AllChampionPage