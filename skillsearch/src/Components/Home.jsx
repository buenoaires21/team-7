import React from "react";

import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Box } from "@material-ui/core";

const Home = () => {
  return (
    <div style={{height:"550px" , display:"flex", alignItems:"center", justifyContent:"center"}}>
     
       
        <Link  style={{ textDecoration: "none", color: "white" }} to="/EditSkills">
      <Button style={{height:"150px", width:"400px"}} variant="contained">AÑADIR NUEVA HABILIDAD</Button>
           
           </Link>

           <Link  style={{ textDecoration: "none", color: "white" }} to="/ShowSkills">
      <Button style={{height:"150px", width:"400px", marginLeft:"5%"}} variant="contained" color="primary">
        VISUALIZAR HABILIDADES EXISTENTES
      </Button>
      </Link>
     
    </div>
  );
};

export default Home;
