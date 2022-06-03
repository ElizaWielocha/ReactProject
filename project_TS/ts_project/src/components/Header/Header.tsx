import React from 'react';

import { Typography } from '@mui/material/';
import { AppBar } from '@mui/material/';
import { Fade } from '@mui/material/';



const Header = () => {
    return (
        <Fade in={true} timeout={2000}>
            <AppBar sx={{ bgcolor: "#2D1017" }}>
                <Typography variant="h2" align="center" sx={{ color: '#C8ACB3', fontFamily: '"Brush Script MT", "Arial", sans-serif', fontSize: 60 }}>
                    Makeup Browser
                </Typography>
            </AppBar>
        </Fade>
    );
};


export default Header;