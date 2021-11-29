import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  navBar:{
    backgroundColor:"#de554b"
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(30),
   
    "&:hover": {
        border: "3px dotted #ff7a59",
        color: "#ff7a59",
        background: "#fff",
    //   color: "yellow",
    //   borderBottom: "1px solid white",
    //   transform: "skew(-10deg)",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.navBar}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Portal Noticias
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Ultimas noticias
            </Link>
            <Link to="/Search" className={classes.link}>
              Buscador
            </Link>
            
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;