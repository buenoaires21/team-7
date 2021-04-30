import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Selector from "./Selector"
import {
  Button,
  Box,
  TextField,
  Typography,
  CardContent,
  Card,
  Paper,
  Chip,
} from "@material-ui/core/";
import ChartGraphics from "./ChartGraphics"

const useStyles = makeStyles((theme) => ({
  root: {

    minWidth: 275,
    width: "1000px",
   
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cont: {
    display: "flex",
    justifyContent: "center",
    minHeight: "700px",
    alignItems: "center",
  },
  look: {
    display: "flex",
    backgroundColor: "lightgray",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margintop: "5%",
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function ShowSkills() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  return (
    <Box className={classes.cont}>
      <Box className={classes.root} variant="outlined">
        <CardContent>
          <form className={classes.root} noValidate autoComplete="off">
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ChartGraphics/>
      
      
            <Typography style={{ marginTop: "2%" }}>Áreas</Typography>
            <Selector/> 
              <Box
                style={{
                    flexDirection: "column",
                    marginTop: "2%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent:"center"
                
                }}
              >
                    <Paper component="ul" className={classes.look}>
                    {chipData.map((data) => {
                      let icon;
      
                      return (
                        <li key={data.key}>
                          <Chip
                            icon={icon}
                            label={data.label}
                            className={classes.chip}
                          />
                        </li>
                      );
                    })}
                  </Paper>
                <Box
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    display:"flex",
                   justifyContent:"center"
      
                  }}
                >
          
                  
                </Box>
           
              
              </Box>
            </Box>

          
          </form>
        </CardContent>
      </Box>
    </Box>
  );
}
