import React from 'react';
import Typography from '@mui/material/Typography/Typography';
import AppBar from '@mui/material/AppBar/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade/Fade';


/*
<Fade in={true} timeout={2000}>
                    <Typography data-testId='headerText' variant="h1" align="center" sx={{fontSize: 50}}>
                        Makeup Browser
                    </Typography>
            </Fade>
*/

const Header = () => {
    return (
        <Fade in={true} timeout={2000}>
            <Typography data-testId='headerText' variant="h1" align="center" sx={{fontSize: 50}}>
                Makeup Browser
            </Typography>
        </Fade>
    );
};


export default Header;