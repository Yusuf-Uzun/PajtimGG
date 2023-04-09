import { useParams } from 'react-router-dom';
import './spage.css';
function UserSummonerPage(){
    const { region, summonerName } = useParams();
    return (
        <div>
            <h1>region:{region}</h1>
            <h2>name: {summonerName}</h2>
            <div>
                <a href="http://localhost:5173/">
                    <img src="PajtimGG2.png" height={"20px"} width={"80px"}></img>
                </a>
            </div>
        </div>
    );
}
export default UserSummonerPage;