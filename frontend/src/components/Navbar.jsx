import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Logo from "../assets/mockpi.png";

const useStyles = makeStyles(() => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    height: 50,
  },
}));

const Navbar = ({ loggedIn, logout }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Link to="/">
          <img src={Logo} alt="logo" className={classes.logo} />
        </Link>
        <Typography variant="h6" component="div">
          <Link to="/">Home</Link>
        </Typography>
        <Typography variant="h6" component="div">
          <Link to="#">Features</Link>
        </Typography>
        <Typography variant="h6" component="div">
          <Link to="#">Pricing</Link>
        </Typography>
        <Typography variant="h6" component="div">
          <Link to="#">Testimonials</Link>
        </Typography>
        {loggedIn ? (
          <Button onClick={logout} color="inherit">
            Logout
          </Button>
        ) : (
          <Button component={Link} to="/auth/login" color="inherit">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

