import Button from '@mui/material/Button';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

import { useColorScheme } from '@mui/material/styles';

function ModeToggle() {
    const { mode, setMode } = useColorScheme();
    return (
        <Button
            onClick={() => {
                setMode(mode === 'light' ? 'dark' : 'light');
            }}
        >
            {mode === 'light' ? 'Turn dark' : 'Turn light'}
        </Button>
    );
}

function App() {
    return (
        <>
            <ModeToggle />
            <hr />
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
