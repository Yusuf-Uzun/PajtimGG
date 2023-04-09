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

function GetSummonerName() {
    const [SummonerName, SetSummonerName] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');

    console.log(SummonerName);
    console.log(selectedRegion);

    function isEmptyOrSpaces(str: string): boolean{
        return str === null || str.match(/^ *$/) !== null;
    }

    function findSummoner(name: string) {
        if (isEmptyOrSpaces(SummonerName) && selectedRegion === ''){
            alert('Choose a region and your Summoner Name');
        }
        else if (selectedRegion === ''){
            alert('Choose a region')
        }
        else if (isEmptyOrSpaces(SummonerName)){
            alert('Enter your Summoner Name');
        }
        else{
            const URI = `http://localhost:6969/${selectedRegion}/${SummonerName}`;
            console.log(URI);
            axios.get(URI)
                .then(({ data }) => console.log(data))
                .then(() => {
                    summonerID = dataInfo['0'];
                    summonerLevel = dataInfo['1'];
                })
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
                <Button variant="contained" onClick={() => findSummoner(SummonerName)}>Search</Button>
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

export default GetSummonerName;