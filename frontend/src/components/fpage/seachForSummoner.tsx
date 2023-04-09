import axios from "axios";
import { 
    useState, 
} from "react";
import './index.css'
import { 
    Button, 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem, 
    TextField, 
    SelectChangeEvent,
} from '@mui/material';

let dataInfo: any;
let summonerID: any;
let summonerLevel: any;

function searchForSummoner() {
    const [SummonerName, SetSummonerName] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
    
    const BACKEND_PORT = "6969";
    const FRONTEND_PORT = "5173";
    console.log(SummonerName);
    console.log(selectedRegion);

    function isEmptyOrSpaces(str: string): boolean{
        return str === null || str.match(/^ *$/) !== null;
    }

    const BACKEND_URI: () => string = () => {
        return `http://localhost:${BACKEND_PORT}/${selectedRegion}/${SummonerName}`;
    }

    function InputIsCorrect(SummonerName: string, selectedRegion: string): boolean {
        if (isEmptyOrSpaces(SummonerName) && selectedRegion === ''){
            alert('Choose a region and your Summoner Name');
            return false;
        }
        else if (selectedRegion === ''){
            alert('Choose a region');
            return false;
        }
        else if (isEmptyOrSpaces(SummonerName)){
            alert('Enter your Summoner Name');
            return false;
        }
        else {
            return true;
        }
    }

    function findSummoner(name: string) {
        if (InputIsCorrect(SummonerName, selectedRegion)) {
            console.log(BACKEND_URI());
        }
    }

    const handleRegion = (event: SelectChangeEvent<string>): void => {
        setSelectedRegion(event.target.value as string);
    }

    return (
        <div className="Container">
            <div className="TextBox">
                <TextField
                    id="summonerSearchBox"
                    label="Search field"
                    type="search"
                    variant="standard"
                    onChange={e => SetSummonerName(e.target.value)} 
                    value={SummonerName}
                />
            </div>
            <div className="Search">
                <a href={`http://localhost:${FRONTEND_PORT}/summoner`}><Button variant="contained" onClick={() => findSummoner(SummonerName)}>Search</Button></a>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="chooseRegion">Region</InputLabel>
                <Select
                    labelId="chooseRegion"
                    id="chooseRegion"
                    value={selectedRegion}
                    label="Region"
                    onChange={handleRegion}
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={"EUW1"}>EUW</MenuItem>
                    <MenuItem value={"NA"}>NA</MenuItem>
                 </Select>
                </FormControl>
            </div>
        </div>
    );
}

export default searchForSummoner;