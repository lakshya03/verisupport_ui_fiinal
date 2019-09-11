import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HomeNav from "../../../Components/Customer/HomeNav/HomeNav.react";
import {Button,Form,Grid,Header,Message,Segment} from "semantic-ui-react";


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        phoneNumber: "",
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
      login: { ...prevState.login, [name]: value }
    }));
  }
  onSubmit(e) {
    e.preventDefault();

    
      localStorage.setItem('phoneNumber', this.state.login.phoneNumber)

    axios
      .post(`http://localhost:4040/getCustomerByPhoneNumber`, this.state.login)
      .then(res => {
        this.setState({ success: res.data });
        if (this.state.success) {
          this.props.history.push("/dashboard");
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
                    icon="phone"
                    iconPosition="left"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={this.state.phoneNumber}
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
              <Message>
                Not registered yet? <Link to="/register">Sign Up</Link>
              </Message>
            </Grid.Column>
            
          </Grid>
          
        </div>
       
      </div>
    );
  }
}

export default LoginPage;
