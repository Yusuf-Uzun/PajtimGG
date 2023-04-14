import { Button } from '@mui/material';

function RefreshButton(){

    return (
        <div>
            <Button variant="contained" onClick={() => window.location.reload()}>Refresh</Button>
        </div>
    )
}
export default RefreshButton;