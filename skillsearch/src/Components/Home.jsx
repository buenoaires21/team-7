import React from "react";

import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Box, Typography } from "@material-ui/core";
import ButtonStyle from "./ButtonStyle"
import GrisImages from "./GrisImages"
const Home = () => {
  return (
    <div style={{marginTop:"2%"}}>
      <GrisImages />
    <div style={{height:"325px" , display:"flex", alignItems:"center", justifyContent:"center" , flexDirection:"column"}}>
      {/* <Box style={{display:"flex", flexDirection:"row"}}> 
        <Link  style={{ textDecoration: "none", color: "white" }} to="/EditSkills">
      <Button style={{height:"150px", width:"400px"}} variant="contained">AÑADIR NUEVA HABILIDAD</Button>
           
           </Link>

           <Link  style={{ textDecoration: "none", color: "white" }} to="/ShowSkills">
      <Button style={{height:"150px", width:"400px", marginLeft:"5%"}} variant="contained" color="primary">
        VISUALIZAR HABILIDADES EXISTENTES
      </Button>
      </Link>
      </Box> */}

<ButtonStyle/>
    </div>
    </div>
  );
};

export default Home;
