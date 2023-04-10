import { Await, useParams } from 'react-router-dom';
import './spage.css';
import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { profile } from 'console';


function UserSummonerPage(){
    const { region, summonerName } = useParams();
    const [isLoading, SetIsLoading] = useState(true);

    const BACKEND_PORT = "6969";
    const BACKEND_URI = `http://localhost:${BACKEND_PORT}/summoners/${region}/${summonerName}`

    let level, profileIconID: string | number | undefined;

    const instance = axios.create({
        baseURL: BACKEND_URI,
        headers: {
          "Content-Type": "application/json"
        }
      });
  
    const getDelayConfig = () => ({
        params: {
            delay: 3,
        },
    });

    useEffect(() => {
        const fetchUser = async() => {
            await getData(BACKEND_URI).then(
                () => SetIsLoading(false)
            );
        }
        fetchUser();
    }, [])


    async function getData(URI: string){
        axios.get(URI, Object.assign(getDelayConfig()))
            .then((bigData: any) =>  {
                let data = bigData['data']
                level = data['summonerLevel'];
                console.log(level)
                profileIconID = data['profileIconId']
                console.log(profileIconID);
            })
    }
    
    return (
        <div>
            <div>
                {isLoading ? (
                    <h1>'Loading'</h1>
                ) : 
                (
                    <h1>{level}</h1>
                )}
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