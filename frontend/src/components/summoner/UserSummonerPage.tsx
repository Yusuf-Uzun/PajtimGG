import { Await, useLoaderData, useParams } from 'react-router-dom';
import './spage.css';
import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { profile } from 'console';


function UserSummonerPage(){
    const { region, summonerName } = useParams();
    const [level, SetLevel] = useState(0);
    const [profileIcon, SetProfileIcon] = useState('');
    const BACKEND_PORT = "6969";
    const BACKEND_URI = `http://localhost:${BACKEND_PORT}/summoners/${region}/${summonerName}`
    
    useEffect(() => {
        getUser();
    }, [])
    const getUser = () => {
        axios.get(BACKEND_URI)
            .then(res => {
                SetLevel(res.data.summonerLevel)
                SetProfileIcon(`profileicon/${res.data.profileIconId}.png`)
            })
    }
    return (
        <div>
            <div>
                <h5>summoner: {summonerName}</h5>
                <h5>level: {level}</h5>
                <h5>iconid: {profileIcon}</h5>
                <img src={profileIcon} />
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