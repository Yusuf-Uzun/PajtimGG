import { Button } from '@mui/material';

function RefreshButton(){

    return (
        <>
            <Button 
                style={{maxWidth: '90px', maxHeight: '30px', minWidth: '30px', 
                        minHeight: '30px', fontSize: '.8em', backgroundColor: 'rgba(128, 128, 128, 0.3)', 
                        marginTop: '50px', marginBottom: '25px', color: 'rgb(20, 40, 80)', borderRadius: '20px'}} 
                variant="contained" 
                onClick={() => window.location.reload()}>Refresh</Button>
        </>
    )
}
export default RefreshButton;