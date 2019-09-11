//Main incident page to add incidents by the User and agent

import React from "react";
import { Form, Grid, Header, Segment, Button } from "semantic-ui-react";
import axios from "axios";
import uuid from "uuid";
class Incident extends React.Component {
  constructor() {
    super();

    this.state = {
      addIncident: {
        phoneNumber: 0,
        incidentType: "Mobile Network",
        priority: 'high',
        comments: "",
        incidentId: uuid(),
        status: "Active",
        title: "",
        date: ""
      }
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    this.setState(prevState => ({
      addIncident: { ...prevState.addIncident, [name]: value }
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.addIncident);
    axios
      .post(`http://localhost:5050/addIncident`, this.state.addIncident)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }
  render() {
    return (
      <div>
       
        <Grid centered columns={2}>
          <Grid.Column>
            <Header as="h2" textAlign="center">
              <br></br> Add an Incident
            </Header>
            <Segment>
              <Form size="large" onSubmit={this.handleSubmit}>
                <Form.Input
                  fluid
                  icon="phone"
                  iconPosition="left"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                />
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Title"
                    placeholder="Enter the Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                  <Form.Field
                    label="Category"
                    control="select"
                    name="incidentType"
                    onChange={this.handleChange}
                  >
                    <option value="Mobile Network">Mobile Network</option>
                    <option value="Bill Payment">Bill Payment</option>
                  </Form.Field>
                </Form.Group>

                <Form.TextArea
                  label="Describe the Incident"
                  placeholder="Kindly give the neccessary details in order to serve you better."
                  name="comments"
                  value={this.state.comments}
                  onChange={this.handleChange}
                />

                <Button color="blue" fluid size="large">
                  Submit
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Incident;
