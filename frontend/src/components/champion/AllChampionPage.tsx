import axios from "axios"
import { useEffect, useState } from "react"
import './champpage.css'

function AllChampionPage(){
    const BACKEND_PORT = '3888';
    const BACKEND_ALL_CAMP_URI = `http://localhost:${BACKEND_PORT}/api/champions`;
    const [listChampions, SetListChampions] = useState([]);
    useEffect(() => {
        get_champions();
    }, [])  

    const get_champions = () => {
        axios.get(BACKEND_ALL_CAMP_URI)
            .then(championData => { 
                SetListChampions(championData.data)
            }
        )
    }   
    return (
        <div className='championpage'>
            {listChampions.map((champion) =>(
                <div>
                <h5 key={champion}>{champion}</h5>
                <img src={`championIcons/${champion}.png`} title={`${champion}`}
                    alt={`${champion}`}></img>
                </div>
            ))}
        </div>
    )
}
export default AllChampionPage