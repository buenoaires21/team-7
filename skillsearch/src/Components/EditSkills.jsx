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
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Interaction from "./Interaction"
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "lightgray",
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

export default function EditSkills() {
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
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <form className={classes.root} noValidate autoComplete="off">
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                style={{ width: "40%" }}
                id="filled-basic"
                label="Nombre"
                variant="filled"
              />
              <TextField
                style={{ width: "40%", marginTop: "2%" }}
                id="filled-basic"
                label="Email"
                variant="filled"
              />
              <Typography style={{ marginTop: "2%" }}>Habilidades</Typography>
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
                  display:"flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <TextField
                  style={{ width: "40%", marginTop: "2%" }}
                  id="filled-basic"
                  label="Agregar Habilidad"
                  variant="filled"
                />
                <Tooltip title="Add" aria-label="add">
                  <Fab color="primary" className={classes.fab}>
                    <AddIcon />
                  </Fab>
                </Tooltip>
                </Box>
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
              <Interaction/>
            </Box>
            
          
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
