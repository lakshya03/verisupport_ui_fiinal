import React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';

import './AgentNav.css';

class AgentNav extends React.Component {
    
    logout(){

       
        window.location = "/agentlogin"
    
      }
    render() {
        return (
            <div className='agentnav_wrapper'>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/agentdashboard">VeriSupport</Navbar.Brand>
                    <Nav className="mr-auto">
                        
                        <Nav.Link href="/addIncidentbyAgent">Add Incident</Nav.Link>
                        
                    </Nav>
                    <Form inline>
                        <Icon circular inverted color='blue' name='power off' size='large' onClick={this.logout} />
                    </Form>
                </Navbar>
            </div>
        );
    }
}

export default AgentNav;