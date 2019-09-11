//The first page when the localhost base URL loads

import React from "react";
import "./HomePage.css";
import img from "../../../resources/images/logo.png";
import { Grid, Cell } from "react-mdl";


const HomePage = () => {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img src={img} alt="avatar" className="avatar-img" />
          <br />
          <br />
          <div className="banner-text">
            <h1>The Best Customer Experience are built with VeriSupport</h1><br/>
            <hr /><br/>
            <p>
              The Complete platform where you can raise incidents and track
              them. 
            </p><br/><br/><br/>
            <div className="social-links">
              <a href="/login" rel="noopener noreferrer" >
                <i className="fa fa-sign-in" aria-hidden="true">
                  <h5>Login</h5>
                </i>
              </a>
              <a href="/register" rel="noopener noreferrer" >
                <i className="fa fa-user-plus" aria-hidden="true">
                  <h5>Signup</h5>
                </i>
              </a>
              <a href="/agentlogin" rel="noopener noreferrer" >
              <i className="fa fa-user-circle-o" aria-hidden="true">
                  <h5>Agent Login</h5>
                </i>
              </a>
            </div>
          </div>
         
        </Cell>
     
       
      </Grid>

      
     
    </div>
    
    
  );
};

export default HomePage;
