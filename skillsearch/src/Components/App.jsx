import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import ShowSkills from "./ShowSkills";
import Home from "./Home";
import EditSkills from "./EditSkills";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/showSkills" component={ShowSkills} />
        <Route path="/editSkills" component={EditSkills} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
