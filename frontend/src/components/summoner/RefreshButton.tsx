import { Button } from '@mui/material';

function RefreshButton(){

    return (
        <div>
            <Button style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} variant="contained" onClick={() => window.location.reload()}>Refresh</Button>
        </div>
    )
}
export default RefreshButton;