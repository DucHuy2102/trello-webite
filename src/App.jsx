import Button from '@mui/material/Button';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { useColorScheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

function ModeSelect() {
    const { mode, setMode } = useColorScheme();
    const handleChangeMode = (e) => {
        const selectedValue = e.target.value;
        console.log(selectedValue);
        setMode(selectedValue);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
            <InputLabel id='label-dark-light-mode'>Mode</InputLabel>
            <Select
                defaultValue=''
                labelId='label-dark-light-mode'
                id='dark-light-mode'
                value={mode}
                label='Mode'
                onChange={handleChangeMode}
            >
                <MenuItem value='light'>
                    <div className='flex items-center gap-2'>
                        <LightModeIcon fontSize='small' />
                        Light
                    </div>
                </MenuItem>
                <MenuItem value='dark'>
                    <div className='flex items-center gap-2'>
                        <DarkModeIcon fontSize='small' />
                        Dark
                    </div>
                </MenuItem>
                <MenuItem value='system'>
                    <div className='flex items-center gap-2'>
                        <SettingsBrightnessIcon fontSize='small' />
                        System
                    </div>
                </MenuItem>
            </Select>
        </FormControl>
    );
}

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
            <ModeSelect />
            <hr />
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
