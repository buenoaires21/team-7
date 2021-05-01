import React from "react";
import { Typography, AppBar, Toolbar, Container, Box } from "@material-ui/core";

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar></Toolbar>
      </Container>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: "2%",
          marginBottom: "2%",
          justifyItems: "flex-end",
        }}
      >
        <Typography component="h7" align="right" variant="h7" color="inherit">
          FUNDACION SES
        </Typography>
        <Typography align="right" variant="body1" color="inherit">
          Copyright © 2021
        </Typography>
      </Box>
    </AppBar>
  );
};

export default Footer;
