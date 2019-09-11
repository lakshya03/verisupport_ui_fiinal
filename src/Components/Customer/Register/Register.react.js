//main Page for Registration of users to add incidents and check incidents
import React from "react";
import axios from "axios";
import { Button, Form, Grid, Segment } from "semantic-ui-react";
import HomeNav from "../../../Components/Customer/HomeNav/HomeNav.react";
import './Register.css';

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      customer: {
        customerName: "",
        phone_number: 0,
        email: "",
        password: "",
        address: ""
      },
      success: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
  }
  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

  
    this.setState(prevState => ({
      customer: { ...prevState.customer, [name]: value }
    }));
  }

  handleEmailChange = event => {
    let target = event.target;
    let value = target.value;
    let name = target.name;

  
    this.setState(prevState => ({
      customer: { ...prevState.customer, [name]: value }
    }),
    this.validateEmail()
    );    
      
   
  };

  handlePasswordChange = event => {
    let target = event.target;
    let value = target.value;
    let name = target.name;

  
    this.setState(prevState => ({
      customer: { ...prevState.customer, [name]: value }
    }),
    this.validatePassword()
    );    
  };

  handlePhoneNumberChange = event => {
     let target = event.target;
    let value = target.value;
    let name = target.name;

  
    this.setState(prevState => ({
      customer: { ...prevState.customer, [name]: value }
    }),
    this.validatePhoneNumber()
    );    
  };
  validateEmail = () => {
    // const {customer:{
    //   email
    // } } = this.state;
    let emailError = '';
   
    if (
      !this.state.customer.email.match(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
      )
    ) {
     
      emailError = "Enter a valid EmailID";
    }
    this.setState({
      emailError,
    });
   
  };

  validatePassword = () => {
    // const { customer:{
    //   password 
    // }} = this.state;
    let passwordError = '';
   
    if (
      !this.state.customer.password.match(
        /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/,
      )
    ) {
      
      passwordError = "Enter a Strong password which includes atleast one Uppercase,Lowercase,Special Symbol,Number and atleast 9 characters";
    }
    this.setState({
      passwordError,
    });
   
  };
validatePhoneNumber =() => {
  // const { customer: {
  //   phone_number
  //  } } = this.state;
    let phoneNumberError = '';
   

    if (
      !String(this.state.customer.phone_number).match(
        "^[0-9]{9}$",
      )
    ) {
     
      phoneNumberError = "Enter a Valid PhoneNumber(10digits)";
    }
    this.setState({
      phoneNumberError,
    });
    
}
 
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.customer);

    axios
      .post(`http://localhost:4040/addCustomer`, this.state.customer)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({ success: res.data });
        if (this.state.success) {
          console.log("shit");
         
          this.props.history.push("/login");
        } else {
          console.log(" Enter the values ");
        }
      });
  }

  render() {
    const isEnabled =
      this.state.emailError === '' &&
      this.state.passwordError === '' && this.state.phoneNumberError=== '' &&
      this.state.customer.email.length > 0 &&
      this.state.customer.password.length > 0;
    return (
      <div>
        <HomeNav></HomeNav>
        <div>
          <Grid centered columns={2}>
            <Grid.Column>
            
              <br />
              <Segment>
                <Form size="large" onSubmit={this.handleSubmit}>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Name"
                    name="customerName"
                    type="text"
                    value={this.state.customerName}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    fluid
                    icon="mobile"
                    iconPosition="left"
                    placeholder="Phone Number"
                    name="phone_number"
                    type="number"
                    value={this.state.phone_number}
                    // maxLength ='10'
                    onChange={this.handlePhoneNumberChange}
                  />
                   <i className="error">{this.state.phoneNumberError}</i>
                  <Form.Input
                    fluid
                    icon="at"
                    iconPosition="left"
                    placeholder="Email"
                    name="email"
                    type="text"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                  <i className="error">{this.state.emailError}</i>
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  />
                  <i className="error">{this.state.passwordError}</i>
                  
                  <Form.Input
                    fluid
                    icon="home"
                    iconPosition="left"
                    placeholder="Address"
                    type="text "
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                  />
                  <Button color="blue" fluid size="large" disabled={!isEnabled}>
                    Register
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

export default Register;


// class Register extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       customer: {
//         customerName: "",
//         phone_number: 0,
//         email: "",
//         password: "",
//         address: ""
//       },
//       success: 0
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(e) {
//     let target = e.target;
//     let value = target.value;
//     let name = target.name;

  
//     this.setState(prevState => ({
//       customer: { ...prevState.customer, [name]: value }
//     }));
//   }

//   handleEmailChange = event => {
//     this.setState({ email: event.target.value }, () => {
//       this.validateEmail();
//     });
//   };

//   handlePasswordChange = event => {
//     this.setState({ password: event.target.value }, () => {
//       this.validatePassword();
//     });
//   };
//   handlePhoneNumberChange = event => {
//     this.setState({ phone_number: event.target.value}, () => {
//       this.validatePhoneNumber();
//     })
//   }
//   validateEmail = () => {
//     // const { email } = this.state;
//     let emailError = '';
//     console.log(this.state.email+"Email");
//     console.log(this.state.email+"Emailid")
//     if (
//       !this.state.email.match(
//         /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
//       )
//     ) {
//       //formIsValid = false;
//       emailError = "Enter a valid EmailID";
//     }
//     this.setState({
//       emailError,
//     });
//     //return formIsValid;
//   };

//   validatePassword = () => {
//     // const { password } = this.state;
//     let passwordError = '';
//     //let formIsValid = true;
//     if (
//       !this.state.password.match(
//         /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/,
//       )
//     ) {
//       //formIsValid = false;
//       passwordError = "Enter a Strong Password";
//     }
//     this.setState({
//       passwordError,
//     });
    
//   };
// validatePhoneNumber =() => {
//   // const { phone_number } = this.state;
//     let phoneNumberError = '';
    

//     if (
//       !this.state.phone_number.match(
//         "^[0-9]{10}$",
//       )
//     ) {
    
//       phoneNumberError = "Enter a Valid PhoneNumber(10digits)";
//     }
//     this.setState({
//       phoneNumberError,
//     });
    
// }
 
//   handleSubmit(e) {
//     e.preventDefault();
//     console.log(this.state.customer+"***********");

//     axios
//       .post(`http://localhost:4040/addCustomer`, this.state.customer)
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//         this.setState({ success: res.data });
//         if (this.state.success) {
//           console.log("shit");
         
//           this.props.history.push("/login");
//         } else {
//           console.log(" Enter the values ");
//         }
//       });
//   }

//   render() {
//     const isEnabled =
//       this.state.emailError === '' &&
//       this.state.passwordError === '' && this.state.phoneNumberError=== '' &&
//       this.state.email.length > 0 &&
//       this.state.password.length > 0;
//     return (
//       <div>
//         <HomeNav></HomeNav>
//         <div>
//           <Grid centered columns={2}>
//             <Grid.Column>
            
//               <br />
//               <Segment>
//                 <Form size="large" onSubmit={this.handleSubmit}>
//                   <Form.Input
//                     fluid
//                     icon="user"
//                     iconPosition="left"
//                     placeholder="Name"
//                     name="customerName"
//                     type="text"
//                     value={this.state.customerName}
//                     onChange={this.handleChange}
//                   />
//                   <Form.Input
//                     fluid
//                     icon="mobile"
//                     iconPosition="left"
//                     placeholder="Phone Number"
//                     name="phone_number"
//                     type="number"
//                     value={this.state.phone_number}
//                     maxlength ='10'
//                     onChange={this.handlePhoneNumberChange}
//                   />
//                    <i className="error">{this.state.phoneNumberError}</i>
//                   <Form.Input
//                     fluid
//                     icon="at"
//                     iconPosition="left"
//                     placeholder="Email"
//                     name="email"
//                     type="text"
//                     value={this.state.email}
//                     onChange={this.handleEmailChange}
//                   />
//                   <i className="error">{this.state.emailError}</i>
//                   <Form.Input
//                     fluid
//                     icon="lock"
//                     iconPosition="left"
//                     placeholder="Password"
//                     type="password"
//                     name="password"
//                     value={this.state.password}
//                     onChange={this.handlePasswordChange}
//                   />
//                   <i className="error">{this.state.passwordError}</i>
//                   <Form.Input
//                     fluid
//                     icon="home"
//                     iconPosition="left"
//                     placeholder="Address"
//                     type="text "
//                     name="address"
//                     value={this.state.address}
//                     onChange={this.handleChange}
//                   />
//                   <Button color="blue" fluid size="large" disabled={!isEnabled}>
//                     Register
//                   </Button>
//                 </Form>
//               </Segment>
//             </Grid.Column>
//           </Grid>
//         </div>
//       </div>
//     );
//   }
// }

// export default Register;
