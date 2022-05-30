import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";
import Fade from "@mui/material/Fade/Fade";

const Footer = () => {
  return (
    <Fade in={true} timeout={2000}>
      <footer data-align="center">
        <Button variant="outlined">
          <Link to="/">
            <Typography variant="h2" align="center" sx={{ fontSize: 30 }}>
              Home
            </Typography>
          </Link>
        </Button>
        <Button variant="outlined">
          <Link to="/About">
            <Typography variant="h2" align="center" sx={{ fontSize: 30 }}>
              About site
            </Typography>
          </Link>
        </Button>
      </footer>
    </Fade>
  );
};

export default Footer;