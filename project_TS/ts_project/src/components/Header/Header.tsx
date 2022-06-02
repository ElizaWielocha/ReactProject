import React from 'react';
import Typography from '@mui/material/Typography/Typography';
import AppBar from '@mui/material/AppBar/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade/Fade';
import { Box, ThemeProvider, createTheme } from '@mui/system';



const Header = () => {
    return (
        <Fade in={true} timeout={2000}>
            <AppBar sx={{ bgcolor: "#2D1017" }}>
                <Typography data-testId='headerText' variant="h2" align="center" sx={{ color: '#C8ACB3', fontFamily: '"Brush Script MT", "Arial", sans-serif', fontSize: 60 }}>
                    Makeup Browser
                </Typography>
            </AppBar>
        </Fade>
    );
};


export default Header;