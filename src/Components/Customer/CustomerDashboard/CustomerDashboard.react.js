//main component for customer dashboard consiting of the incidents list , profile and other functionalities

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import {BrowserRouter} from 'react-router-dom';
import Nav from '../Nav/Nav.react';
import {Grid,Header,Segment} from 'semantic-ui-react';
import Appbar from '../../../Components/Customer/Appbar/Appbar.react';
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
const CustomerDashboard = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    function handleChange(event, newValue) {
      setValue(newValue);
     
    }
    if(localStorage.getItem('phoneNumber')){
   
    return (
        <div >
            <div>
                <Appbar></Appbar>
            </div>
            <Grid centered columns={1}>
                <Grid.Column>
                    <Header as="h2" textAlign="center">
                         <br></br>Welcome to VeriSupport
                      <Header.Subheader block>
                      The Best Customer Experience are built with VeriSupport
                      </Header.Subheader>
                    </Header> 
                <Segment>
                < Paper className={classes.root}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
              <BrowserRouter><Nav /></BrowserRouter>
               </Tabs>
      
              </Paper>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
    );
    }
    else {
      return(
      <h1>error</h1>
      );
    }

}

export default CustomerDashboard;