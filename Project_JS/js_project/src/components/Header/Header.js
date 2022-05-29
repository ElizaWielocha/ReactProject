import React from 'react';
import Typography from '@mui/material/Typography/Typography';
import AppBar from '@mui/material/AppBar/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade/Fade';

function HideOnScroll(props) {
    const trigger = useScrollTrigger(); // gdy nie scrollujemy to zwraca true. Gdy scrollujemy zwraca false.

    // <slide> ma nam owijać komponent który będziemy zmieniać. Natomiast props.children zamieni się w ten komponent/komponenty, który obwijamy niżej.  
    return <Slide appear={false} direction='down' in={!trigger}>
        {props.children} 
    </Slide>
}

// sx= wpisywać tam można style, których nie możemy zaimplementować wcześniej
const Header = () => {
    return (
        <HideOnScroll>
            <Fade in={true} timeout={2000}>
                <AppBar>
                    <Typography variant="h1" align="center" sx={{fontSize: 50}}>
                        Makeup Browser
                    </Typography>
                </AppBar>
            </Fade>
        </HideOnScroll>
    );
};


export default Header;