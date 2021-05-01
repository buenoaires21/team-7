import React from "react";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Box, Typography } from "@material-ui/core";
import ButtonStyle from "./ButtonStyle";
import GrisImages from "./GrisImages";
const Home = () => {
  return (
    <div style={{ marginTop: "2%" }}>
      <GrisImages />
      <div
        style={{
          height: "325px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <ButtonStyle />
      </div>
    </div>
  );
};

export default Home;
