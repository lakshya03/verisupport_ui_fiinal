//It defines the neccesary routing of the pages for different components

import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "../Components/Customer/Register/Register.react";
import LoginPage from "../Components/Customer/LoginPage/LoginPage.react";
import CustomerDashboard from "../Components/Customer/CustomerDashboard/CustomerDashboard.react";
import HomePage from "../Components/HomePage/HomePage.react";
import UserProfile from "../Components/Customer/UserProfile/UserProfile.react";
import AgentLogin from "../Components/Agent/AgentLogin/AgentLogin.react";
import AgentDashboard from '../Components/Agent/AgentDashboard/AgentDashboard.react';
import AddIncident from "../Components/Customer/AddIncident/AddIncident.react";
import AddIncidentByAgent from "../Components/Agent/AddIncidentByAgent/AddIncidentByAgent.react";

const Navigation = () => {
  return (
    <div className="Navigation">
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/dashboard" component={CustomerDashboard}></Route>
        {/* <Route path="/active" component={ActiveIncident}></Route>
        <Route path="/closed" component={ClosedIncident}></Route> */}
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/agentlogin" component={AgentLogin}></Route>
        <Route exact path="/addIncident" component={AddIncident}></Route>
        <Route exact path="/userprofile" component={UserProfile}></Route>
        <Route exact path="/agentdashboard" component={AgentDashboard}></Route>
        <Route exact path="/addIncidentbyAgent" component={AddIncidentByAgent}></Route>
      </Switch>
    </div>
  );
};

export default Navigation;
