import Button from '@mui/material/Button';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

function App() {
    return (
        <>
            <p>Hello Duc Huy</p>
            <Button variant='text'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
            <br />
            <AccessAlarm />
            <ThreeDRotation />
        </>
    );
}

export default App;
