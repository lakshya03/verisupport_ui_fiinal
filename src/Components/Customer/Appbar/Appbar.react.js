// The Navbar that is added on the top of all the components inside the customer dashboard
import React from 'react';
import {Navbar,Nav,Form} from 'react-bootstrap';
import {Icon} from 'semantic-ui-react';

export default class MenuExampleBasic extends React.Component{

  logout(){

    localStorage.removeItem('phoneNumber');
    window.location = "/"

  }
    render(){
    return (
    <div>
          
          <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/dashboard">VeriSupport</Navbar.Brand>
                <Nav className="mr-auto">
                      <Nav.Link href="/dashboard">Home</Nav.Link>
                      <Nav.Link href="/addincident">Add Incident</Nav.Link>
                      <Nav.Link href="/userprofile">Profile</Nav.Link>
               </Nav>
          <Form inline>
            <Icon circular inverted color='blue' name='power off' size='large' onClick={this.logout}/>
          </Form>
          </Navbar>
    </div>
    );
  }
}

