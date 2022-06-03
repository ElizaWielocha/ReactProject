import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";
import Fade from "@mui/material/Fade/Fade";
import Grid from "@mui/material/Grid";

const Footer = () => {
  return (
    <Fade in={true} timeout={2000}>
      <Grid container spacing={0} sx={{ bgcolor: "#2D1017", pb: 0.5 }}>
      <footer >
        <Button variant="text">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant="h2" align="center" sx={{ fontSize: 25, color: "#C8ACB3", fontFamily: "sans-serif" }}>
              Home
            </Typography>
          </Link>
        </Button>
        <Button variant="text">
          <Link to="/About" style={{ textDecoration: "none" }}>
            <Typography variant="h2" align="center" sx={{ fontSize: 25, color: "#C8ACB3", fontFamily: "sans-serif" }}>
              About site
            </Typography>
          </Link>
        </Button>
      </footer>
      </Grid>
    </Fade>
  );
};

export default Footer;