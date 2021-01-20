import React from "react";
import "./SideDrawer.css";
import FormInput from "../../pages/FormInput/FormInput";
import { Route, Switch } from "react-router-dom";
import Audio from "../../pages/Audio/Audio";
import Habbit from "../../pages/Habbits/Habbit";

const SideDrawer = () => {
  return (
    <div className="SideDrawer">
   
      <Switch>
      <Route  exact path="/details" component={FormInput}/>
      <Route  exact path="/details/audio" component={Audio}/>
      <Route exact path="/details/habbits" component={Habbit}/>
      </Switch>
    </div>
  );
};

export default SideDrawer;
