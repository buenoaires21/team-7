import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography, Box, Avatar} from '@material-ui/core/';

import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Box style={{display:"flex", }}>
          <Toolbar>
          <Link  style={{ textDecoration: "none", color: "white" }} to="/Home">
          <Avatar alt="Remy Sharp" src="https://scontent.flhr3-3.fna.fbcdn.net/v/t1.6435-9/179770187_10225038840743250_1801776182910386911_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=730e14&_nc_ohc=2fCbosAYk5IAX-W3TtT&_nc_ht=scontent.flhr3-3.fna&oh=2f831f2bcf8a571e3eff203ea084d70b&oe=60B1DDEE" className={classes.large} />
      </Link>
          </Toolbar>

         
        <Toolbar>
{/*          
          <Typography variant="h7" className={classes.title}>
            INICIO
          </Typography> */}
      
          </Toolbar>
          

        </Box>
      </AppBar>
    </div>
  );
}

