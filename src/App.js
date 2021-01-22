import "./App.css";
import Background from "./pages/Background/Background";
import Form from "./components/FormikForm/form";
import FormInput from "./pages/FormInput/FormInput";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Audio from "./pages/Audio/Audio";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

const App = (props) => {
 
  console.log("redux state",props.show);
  return (
    <div className="App">
      <Route  path="/" component={Background} />
     {props.show && <SideDrawer />}

      {/*<Background/>
<Form/>*/}
    </div>
  );
};

const mapStateToProps = (state) => {
 
  return {
     show: state.showSidebar,
    
  };
};

export default connect(mapStateToProps)(App);
