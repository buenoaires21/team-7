import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Selector from "./Selector";
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
import AddIcon from "@material-ui/icons/Add";

import Fab from "@material-ui/core/Fab";
import Interaction from "./Interaction";
import Tooltip from "@material-ui/core/Tooltip";

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
  const bull = <span className={classes.bullet}>•</span>
  const [input, setInput] = useState("")
  const [chipData, setChipData] = useState([]);

  const handleAdd = ()=>{
      if(input) setChipData(c => [...c, input])
      setInput("")
  }

  return (
    <Box className={classes.cont}>
      <Card className={classes.root} variant="outlined">
        <Typography
          style={{ marginTop: "2%" }}
          component="h1"
          variant="h4"
          align="center"
        >
          Añadir habilidad
        </Typography>
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

              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "40%",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginTop: "2%",
                }}
              >
                <TextField
                  style={{ width: "70%" }}
                  id="filled-basic"
                  label="Agregar Habilidad"
                  variant="filled"
                  value={input}
                  onChange={(e)=>setInput(e.target.value)}
                />
                <Tooltip title="Add" aria-label="add">
                  <Fab color="primary" className={classes.fab} onClick={handleAdd}>
                    <AddIcon />
                  </Fab>
                </Tooltip>
              </Box>
              <Paper component="ul" className={classes.look}>
                {chipData.map((data) => {
                  let icon;

                  return (
                    <li key={data}>
                      <Chip
                        icon={icon}
                        label={data}
                        className={classes.chip}
                        color="secondary"
                      />
                    </li>
                  );
                })}
              </Paper>
              <Typography style={{ marginTop: "2%" }}>Áreas</Typography>
              <Selector />
              <Box
                style={{
                  flexDirection: "column",
                  marginTop: "2%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></Box>
              </Box>
              <Interaction />
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
