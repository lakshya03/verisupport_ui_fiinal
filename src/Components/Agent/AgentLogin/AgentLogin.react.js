import React from 'react';
import axios from "axios";
import HomeNav from "../../../Components/Customer/HomeNav/HomeNav.react";
import {Button,Form,Grid,Header,Segment} from "semantic-ui-react";
import './AgentLogin.css';

class AgentLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          agentLogin: {
            userName: "",
            password: ""
          },
       
          
          success: 0
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
      
      handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState(prevState => ({
            agentLogin: { ...prevState.agentLogin, [name]: value }
        }));
      }
      onSubmit(e) {
        e.preventDefault();
    
        
          localStorage.setItem('userName', this.state.agentLogin.userName)
    
        axios
          .post(`http://localhost:6060/validate`, this.state.agentLogin)
          .then(res => {
            this.setState({ success: res.data });
            if (this.state.success) {
              this.props.history.push("/agentdashboard");
            } else {
               this.setState({message:"Invalid Login"});
      
              console.log(" Wrong Credentials ");
            }
          });
        
      }
      render() {
    
        return (
          <div>
            <HomeNav></HomeNav>
            <div className="home-land">
              <Grid centered columns={2}>
                <Grid.Column>
                  <Header as="h2" textAlign="center"></Header>
                  <Segment>
                    <Form size="large" onSubmit={this.onSubmit}>
                      <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="userName"
                        name="userName"
                        value={this.state.userName}
                        onChange={this.handleChange}
                      />
                      <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                      <Button color="blue" fluid size="large">
                        Login
                      </Button>
                    </Form>
                  </Segment>
                
                </Grid.Column>
                
              </Grid>
              
            </div>
          </div>
        );
      }
    }
    

export default AgentLogin;