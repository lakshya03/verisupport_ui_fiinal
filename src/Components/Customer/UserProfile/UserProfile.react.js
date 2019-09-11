import React from "react";
import { Grid, Header, Segment, Button } from "semantic-ui-react";
import { Form, Row, Col } from "react-bootstrap";
import Appbar from "../Appbar/Appbar.react";

import {connect} from 'react-redux';
import {getListByThunk} from '../../../reducer';

const UserProfile = (props) => {

  if(!props.isLoaded){
    return (
      <div>
        <Appbar></Appbar>
        <Grid centered columns={2}>
          <Grid.Column>
            <Header as="h2" textAlign="center">
              <br></br> Profile 
            </Header>
            <Segment>
              <Form>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    Name
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" readOnly defaultValue="Name" />
                  </Col>
                </Form.Group>
  
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    Mobile Number
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      readOnly
                      placeholder="Mobile Number"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    Email Id
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      placeholder="Email Id"
                      readOnly
                      defaultValue="email@example.com"
                    />
                  </Col>
                </Form.Group>
  
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    Address
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" placeholder="Address" readOnly />
                  </Col>
                </Form.Group>
                <Button color="blue" fluid size="large">
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
        
        {/* <h1>{props.customerDetails.email}</h1> */}
        {/* <h1>Not Loaded</h1>
        {console.log(localStorage.getItem('phoneNumber')+"***")} */}
        <Button onClick={props.get(localStorage.getItem('phoneNumber'))}>Show</Button>
      </div>
    );
}
else { 
  return (
    // <div>
    //  <h1>loaded</h1> loaded
    //   {console.log(props.customerDetails+"Customerdetails")}
    // </div>
    <div>
      <Appbar></Appbar>
      <Grid centered columns={2}>
        <Grid.Column>
          <Header as="h2" textAlign="center">
            <br></br> Profile Test
          </Header>
          <Segment>
            <Form>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" readOnly defaultValue="Name" value ={props.customerDetails.customerName} />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Mobile Number
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    readOnly
                    placeholder="Mobile Number"
                    value ={props.customerDetails.phone_number}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Email Id
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Email Id"
                    readOnly
                    value={props.customerDetails.email}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Address
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Address" readOnly value={props.customerDetails.address} />
                </Col>
              </Form.Group>
              {/* <Button color="blue" fluid size="large">
              Go Up
               {console.log(props.customerDetails)}
              </Button> */}
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>

               {console.log(props.customerDetails)}
      
    </div>
  );
}
  
}

const mapStateToProps = (state) => {
  console.log("mapstate in userprofile111");
 // console.log(state.customerDetails.email+"***");
  console.log("last");
  return {
   
      customerDetails: state.payload,
      isLoaded: state.isLoaded,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      get: (phoneNumber) => {   
        console.log("called");
        console.log(phoneNumber+"mapdisptach in appbar");                   
          dispatch(getListByThunk(phoneNumber))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile); 